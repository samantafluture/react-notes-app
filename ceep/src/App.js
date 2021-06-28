import React, { Component } from "react";
import NotesList from "./components/NotesList/";
import Form from "./components/Form/";
import CategoryList from "./components/CategoryList";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: ["Work", "Study", "Personal"],
    };
  }

  createNote(title, text, category) {
    const newNote = { title, text, category };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes,
    };
    this.setState(newState);
  }

  addCategory(nameCategory) {
    const newArrayCategories = [...this.state.categories, nameCategory];
    const newState = { ...this.state, categories: newArrayCategories };
    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState({ notes: arrayNotes });
  }

  render() {
    return (
      <section className="conteudo">
        <Form
          categories={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className="conteudo-principal">
          <CategoryList
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
          />
          <NotesList
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
