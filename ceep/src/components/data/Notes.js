export default class NotesArray{
    constructor(){
        this.notes = [];
        this._subscribers = [];
    }

    createNote(title, text, category){
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.notify();
    }

    deleteNote(index){
        this.notes.splice(index, 1);
        this.notify();
    }

    subscribe(func){
        this._subscribers.push(func);
    }

    unsubscribe(func){
        this._subscribers = this._subscribers.filter(f => f !== func);
    }

    notify(){
        this._subscribers.forEach(func => func(this.notes));
    }
}

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
}