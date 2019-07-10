import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


export default class TodoQueryClient {

  static instance;

  constructor(){
    if(instance){
      return instance;
    }
    const this.apolloClient = new ApolloClient({
      // By default, this client will send queries to the
      //  `/graphql` endpoint on the same host
      // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
      // to a different host
      link: new HttpLink({ uri: "/graphql" }),
      cache: new InMemoryCache()
    });
    this.instance = this;
  }

  async later() {
    const page = await this.foo.NewPage();
  }

}
