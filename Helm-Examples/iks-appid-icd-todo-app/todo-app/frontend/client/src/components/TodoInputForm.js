import React, {Component} from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

import TodoQueryClient from '../graphql/TodoQueryClient'

/*
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
*/

class TodoInputForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todotext: '' };
    //this.todotext = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //const value = this.todotext.current.value;
    this.setState({ todotext: event.target.value });
  }

  async handleSubmit(event) {
    var val = this.state.todotext;

    const client = new TodoQueryClient();
    const ret = await client.add(val);
    //alert(val);
    /*
    //https://moonhighway.com/understanding-graphql-mutations
    const apolloClient = new ApolloClient({
      // By default, this client will send queries to the
      //  `/graphql` endpoint on the same host
      // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
      // to a different host
      link: new HttpLink({ uri: "/graphql" }),
      cache: new InMemoryCache()
    });  //($text: String, $isComplete: Boolean) todotext: val
    apolloClient.mutate({
      variables: {text: val, isComplete: false},
      mutation: gql`mutation add($text: String!, $isComplete: Boolean){
        add(text: $text, isComplete: $isComplete) {
          _id
          text
          isComplete
        }
      }
    `
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => { console.log(error) });
  */
  this.setState({todotext: ''});
  }

  render() {
    return (
      <InputGroup className="mb-3">
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
