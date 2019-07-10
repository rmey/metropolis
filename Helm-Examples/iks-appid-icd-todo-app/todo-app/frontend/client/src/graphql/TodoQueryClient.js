import ApolloClient from 'apollo-client';
import {HttpLink}  from 'apollo-link-http';
import {InMemoryCache}  from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

let instance = null;

export default class TodoQueryClient {
  constructor() {
    if(instance){
      return instance;
    }
    this.apolloClient = new ApolloClient({
      // By default, this client will send queries to the
      //  `/graphql` endpoint on the same host
      // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
      // to a different host
      link: new HttpLink({ uri: "/graphql" }),
      cache: new InMemoryCache()
    });
    instance = this;
  }

  async add(todo) {
    const result = await this.apolloClient.mutate({
      variables: {text: todo, isComplete: false},
      mutation: gql`mutation add($text: String!, $isComplete: Boolean){
        add(text: $text, isComplete: $isComplete) {
          _id
          text
          isComplete
        }
      }
    `
    });
    console.log(result);
    return result;
  }
}
