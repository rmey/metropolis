import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import TodoQueryClient from '../graphql/TodoQueryClient'



class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listitems:[],error: null,isLoading: true};
  }
  render() {
    return(
      <ListGroup className="todo-list">
          {this.state.listitems.map(item => (
              <ListGroup.Item variant="light">
              {item.text}
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    )
  }
  async componentDidMount() {
    // make the call to the backend
    const client = new TodoQueryClient();
    const ret = await client.getTodoItems();
    if(ret.ok){
      this.setState({listitems:ret.result.data.getTodoitems});
      this.setState({isLoading:false});
    }
  }
}

export default TodoList;
