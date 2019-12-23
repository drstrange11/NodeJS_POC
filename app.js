const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//Add note

yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body description',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})


//Remove Note

yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
        describe: "Note title",
        demandOption:true,
        type:'string'
    }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//List All notes

yargs.command({
    command:"list",
    describe:"List the notes",
    handler(argv){
        console.log("Listing all notes")
        notes.listNotes()
    }
})

//Read Note

yargs.command({
    command:"read",
    describe:"Read a note",
    builder:{
        title:{
            describe:  "Note title",
            demandOption:true ,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()




