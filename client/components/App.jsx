import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';

import ToDoList from './ToDoList.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      input: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/entries/fetchEntry')
      .then(({data}) => {
        this.setState({ lists: data })
      })
      .catch(error => {
        console.log('Error in CDM ', error);
      })
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({input: event.target.value}, () => {
      console.log('This is the state of input ', this.state.input);
    });
  }

  handleSubmit(event) {
    // event.preventDefault();
    console.log('we in here?!')
    this.setState({lists: [...this.state.lists, this.state.input]});
    axios.post('/api/entries/createEntry', {
      errand: this.state.input
    })
      .then(response => {
        console.log('Here is the response: ', response)
      })
      .catch(error => {
        console.log('Error in the axios post request for entry ', error);
      })
  }

  render() {
    console.log('This is the state of lists ', this.state.lists);
    return (
      <div>
        TO DO LIST 
        <Form>
          <input onChange={this.handleInputChange}/>
        </Form>
        <Button bsStyle="success" onClick={this.handleSubmit}> Submit</Button>
        <ToDoList lists={this.state.lists} />
      </div>
    )
  }
}

