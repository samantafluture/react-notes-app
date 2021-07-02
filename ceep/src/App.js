import React, { Component } from "react";
import NotesList from "./components/NotesList/";
import Form from "./components/Form/";
import CategoryList from "./components/CategoryList";
import Categories from "./components/data/Categories";
import NotesArray from "./components/data/Notes";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();
  }

  render() {
    return (
      <section className="conteudo">
        <Form
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className="conteudo-principal">
          <CategoryList
            addCategory={this.categories.addCategory.bind(this.categories)}
            categories={this.categories}
          />
          <NotesList
            deleteNote={this.notes.deleteNote.bind(this.notes)}
            notes={this.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
