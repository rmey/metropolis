import React, {Component} from 'react';

class TodoInputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todotext: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ todotext: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.todotext)
    event.preventDefault()
  }
  render() {
    return (
      React.createElement("div",{className:"form"}),
      React.createElement("form", { ref: "form", onSubmit: this.onSubmit, className: "todoform" },
      React.createElement("input", { type: "text", ref: "itemName", className: "todoform", placeholder: "add a new todo..." }),
      React.createElement("button", { type: "submit", className: "btn btn-success btn-add" }, "Add"))
    )
  }
}




/*
class TodoInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todotext: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.todotext });
  }

  render() {
    return (
      <form>
        className="form-inline"
        Todo:
        <input
          type="text"
          value={this.state.todotext}
          onChange={this.handleChange}
          className="form-control"
        />
      </form>

      //React.createElement("form", { ref: "form", onSubmit: this.onSubmit, className: "form-inline" },
      //React.createElement("input", { type: "text", ref: "itemName", className: "form-control", placeholder: "add a new todo..." }),
      //React.createElement("button", { type: "submit", className: "btn btn-success btn-add" }, "Add"))
    );
  }
}
*/
export default TodoInputForm;
