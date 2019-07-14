
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import Header,{Footer} from './components/Header';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="root">
        <Header>
        </Header>
        <div id="todo">
          <TodoInputForm>
          </TodoInputForm>
          <TodoList>
          </TodoList>
        </div>
        <Footer>
        </Footer>
      </div>
    );
  }
}
export default TodoApp;
