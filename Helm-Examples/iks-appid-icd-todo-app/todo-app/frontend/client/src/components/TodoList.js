import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

var items = [
{ _id: 1, text: "make", isComplete: false },
{ _id: 2, text: "my", done: true },
{ _id: 3, text: "day", done: true }];

class TodoList extends React.Component {
  render() {
    return(
    <ListGroup>
        {items.map(listitem => (
            <ListGroup.Item variant="light">
            {listitem.text}
            </ListGroup.Item>
          ))
        }
    </ListGroup>
    )
  }
}

export default TodoList;
