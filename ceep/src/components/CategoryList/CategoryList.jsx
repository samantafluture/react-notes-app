import React, { Component } from "react";
import "./style.css";

export default class CategoryList extends Component {
  handleEventInput(e) {
    if (e.key === "Enter") {
      let valueCategory = e.target.value;
      this.props.addCategory(valueCategory);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categories.map((category, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Add Category"
          onKeyUp={this.handleEventInput.bind(this)}
        />
      </section>
    );
  }
}
