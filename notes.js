const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title,body) => {
    const notes = loadNotes();
    const alreadyExistNotes = notes.filter(note => note.title === title);
    debugger
    if(alreadyExistNotes.length === 0) {
        notes.push({title,body});
        saveNotes(notes);
        console.log(chalk.green.inverse("New notes added successfully"));
    }else{
        console.log("already exist Notes")
    };
  
}

const removeNotes = (title) => {
    console.log("remove "+title);
    let notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    if (filteredNotes.length === notes.length ) {
        console.log(chalk.red("No Notes removed"))
    } else {
        saveNotes(filteredNotes);
        console.log(chalk.green("Notes removed"))
    }
}

const getList = () => {
    const notes = loadNotes();
    console.log(chalk.green.bold("List of notes:"))
    notes.forEach((note, index) => {
        console.log(chalk.blue.inverse.bold(index+1 + "." + note.title + " :" + note.body ))
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note){
        console.log(chalk.greenBright.inverse(note.title)+ ": " + note.body)

    }else{
        console.log(chalk.red.inverse("No Notes found"));
    }

}

function saveNotes(data) {
    fs.writeFileSync("notes.json", JSON.stringify(data));
}

function loadNotes() {
    try {
        const data = fs.readFileSync("notes.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    getList: getList,
    readNote: readNote,
}