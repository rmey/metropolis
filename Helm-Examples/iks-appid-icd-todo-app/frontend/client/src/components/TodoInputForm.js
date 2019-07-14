import React, {Component} from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

import TodoQueryClient from '../graphql/TodoQueryClient'

class TodoInputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todotext: ''};
    this.state = { error: null};
    //this.todotext = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //const value = this.todotext.current.value;
    this.setState({ todotext: event.target.value });
  }

  // the async could we wrong! need to check event loop
  async handleSubmit(event) {
    var val = this.state.todotext;
    const client = new TodoQueryClient();
    const ret = await client.addTodoItem(val);
    if(!ret.ok){
      this.setState({ error: 'Item could not be created' + ret.error});
    }
    this.setState({todotext: ''});
  }

  render() {
    /*
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }*/
    return (
      <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
      <FormControl
        placeholder="Enter a todo text"
        value={this.state.todotext} type="text" onChange={this.handleChange}
      />
      <InputGroup.Append>
        <Button disabled={!this.state.todotext} onClick={this.handleSubmit} variant="btn btn-success btn-add">Add</Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}

export default TodoInputForm;
