const fs = require('fs')
const chalk = require('chalk')

//Function to read from the notes
const readNote = (title) => {
    const notes = loadNotes()
    const noteCheck = notes.find((note)=> note.title === title)
    if(noteCheck){
        console.log(chalk.bold(noteCheck.title))
        console.log(noteCheck.body)
    }
    else{
        console.log(chalk.red('No note found!'))
    }
}

//Function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger

    if(!duplicateNote){
        
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse("New Note added"))
    }
    else{
        console.log(chalk.red.inverse("Note title taken"))
    }
    saveNotes(notes)
}

//Function to remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    const titleIndex = notes.findIndex((note,index)=> note.title === title)
    if(titleIndex === -1){        
        console.log(chalk.inverse.red("Title not found"))
    }
    else{
    console.log(chalk.inverse.green("Title removed"))
    notes.splice(titleIndex,1)
    saveNotes(notes)
    }
}

//Function to list all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

//Function to write back to JSON
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Function to read JSON
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return []
    }

}

//Making the function available in other modules
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}