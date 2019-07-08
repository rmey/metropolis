import React, {Component} from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

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
  }).then(result => { console.log(result) }).catch(error => { console.log(error) });
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
