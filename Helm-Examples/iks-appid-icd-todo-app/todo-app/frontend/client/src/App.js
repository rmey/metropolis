
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import TodoInputForm from './components/TodoInputForm';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement("div", { id: "main" },React.createElement(Header, null),React.createElement(TodoInputForm, null))
    );
  }
}
export default TodoApp;
