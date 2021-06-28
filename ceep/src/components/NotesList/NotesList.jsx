import React, { Component } from "react";
import NoteCard from "../NoteCard/";
import '../NotesList/style.css'

class NotesList extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <NoteCard 
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title} 
                text={note.text} 
                category={note.category}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
