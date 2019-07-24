
import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default class Header extends React.Component {
  render() {
    return(

        //React.createElement("h1", null, "Welcome to your personal Todo List")
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Welcome to your Todo List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        Signed in as: <a href="#login">unknown</a>
        </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return(
      //React.createElement("h1", null, "Welcome to your personal Todo List")
      <Navbar bg="primary" variant="dark" fixed="bottom">
      <Navbar.Text>
      <a href="https://de.linkedin.com/in/ren%C3%A9-meyer-6271308" target="_blank">Created by René Meyer 2019</a>
      </Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <a href="https://github.com/rmey/metropolis/tree/master/Helm-Examples/iks-appid-icd-todo-app" target="_blank">Find project on Github</a>
      </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}
