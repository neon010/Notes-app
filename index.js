const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version("1.1.0");

//Creating a add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Ttitle",
            deamandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body",
            deamandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body);
    }
});

//Creating a remove command
yargs.command({
    command: "remove",
    describe: "remove a new note",
    builder: {
        title: {
            describe: "Note Ttitle",
            deamandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
    }
});

//Creating a read command
yargs.command({
    command: "read",
    describe: "read a new note",
    handler(argv){
        notes.readNote(argv.title)
    }
});

//Creating a list command
yargs.command({
    command: "list",
    describe: "list all notes",
    handler(){
        notes.getList();
    }
});
yargs.parse();
//console.log(yargs.argv);
