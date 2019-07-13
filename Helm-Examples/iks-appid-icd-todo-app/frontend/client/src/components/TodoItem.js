import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.onClickComplete = this.onClickComplete.bind(this);
  }
}}

export default TodoItem;
