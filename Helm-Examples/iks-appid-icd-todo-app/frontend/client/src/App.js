
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
      //React.createElement(TodoInputForm, null),React.createElement(TodoList, null)
      React.createElement("div", { id: "root" },React.createElement(Header, null), React.createElement("div", { id: "todo" },React.createElement(TodoInputForm, null),React.createElement(TodoList, null)), React.createElement(Footer, null))
    );
  }
}
export default TodoApp;
