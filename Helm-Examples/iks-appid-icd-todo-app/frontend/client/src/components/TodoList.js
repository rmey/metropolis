import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import TodoQueryClient from '../graphql/TodoQueryClient'
import Button from 'react-bootstrap/Button'

import { todoListService } from './TodoSubject';

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listitems:[], error: null};
    this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickComplete = this.onClickComplete.bind(this);
    // subscribe to home component messages
    this.subscription = todoListService.getTodoList().subscribe(list => {
        if (list) {
            this.setState({ listitems:list.todolist });
        } else {
            this.setState({ listitems: [] });
        }
    });
  }

  componentDidMount() {
        // subscribe to home component messages
        this.subscription = todoListService.getTodoList().subscribe(list => {
            if (list) {
                this.setState({ listitems:list });
            } else {
                this.setState({ listitems: [] });
            }
        });
    }

  componentWillUnmount() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
  }


  async fetchData() {
    // make the call to the backend
    const client = new TodoQueryClient();
    const ret = await client.getTodoItems();
    if(ret.ok){
      this.setState({listitems:ret.result.data.getTodoitems});
    }
  }

  async onClickRemove(item) {
    const client = new TodoQueryClient();
    const ret = await client.deleteItem(item._id);
    if(ret.ok){
      await client.killCache();
      await this.fetchData();
    }
  }
  async onClickComplete(item) {
    item.isComplete = item.isComplete != true;
    const client = new TodoQueryClient();
    const ret = await client.updateCompletion(item._id, item.isComplete);
    if(ret.ok){
      await this.fetchData();
    }
  }

  render() {
    return(
      <ListGroup className="todo-list">
      <div>
          {this.state.listitems.map(item => (
              <ListGroup.Item variant="light" key={item._id}>
                <Button className="check-btn" onClick={ () => this.onClickComplete({_id:item._id, isComplete:item.isComplete}) }>
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
                <span className={item.isComplete ?  "isComplete":"isNotComplete"} style={{fontSize: 20}}>
                {item.text}
                </span>
                <Button className="delete-btn" onClick={ () => this.onClickRemove({_id:item._id}) }>
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
    await this.fetchData();
  }

}

export default TodoList;
