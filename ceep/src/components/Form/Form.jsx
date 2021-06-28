import React, { Component } from "react";
import "../Form/style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.category = "Uncategorized";
  }

  handleChangeCategory(event){
    event.stopPropagation();
    this.category = event.target.value;
  }

  handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.createNote.bind(this)}>
        <select
          onChange={this.handleChangeCategory.bind(this)}
          className="form-cadastro_input"
        >
          <option>-- Choose a category --</option>
          {this.props.categories.map((category) => {
            return <option>{category}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Title"
          className="form-cadastro_input"
          onChange={this.handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="form-cadastro_input"
          onChange={this.handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Create Note
        </button>
      </form>
    );
  }
}

export default Form;
