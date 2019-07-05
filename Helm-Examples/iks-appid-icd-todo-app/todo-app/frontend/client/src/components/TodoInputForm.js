import React, {Component} from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

class TodoInputForm extends React.Component {
  constructor(props) {
    super(props)
    this.todotext = React.createRef();
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = this.todotext.current.value;
  }

  handleSubmit(event) {
    var val = this.todotext.current.value;
    alert(val);
  }
  render() {
    return (
      <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        ref={this.todotext} type="text" onChange={() => this.handleChange()}
      />
      <InputGroup.Append>
        <Button onClick={() => this.handleSubmit()} variant="btn btn-success btn-add">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}

export default TodoInputForm;
