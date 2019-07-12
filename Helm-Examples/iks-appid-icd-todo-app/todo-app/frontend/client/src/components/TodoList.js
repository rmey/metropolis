import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import TodoQueryClient from '../graphql/TodoQueryClient'
import Button from 'react-bootstrap/Button'

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listitems:[],error: null,isLoading: true};
  }
  render() {
    return(
      <ListGroup className="todo-list">
      <div>
          {this.state.listitems.map(item => (
              <ListGroup.Item variant="light" key={item._id}>
                <Button className="check-btn">
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
                <span>
                {item.text}
                </span>
                <Button className="delete-btn">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </ListGroup.Item>
            ))
          }
      </div>
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
