import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [
          { title: 'walk the cat',    description: 'take Yogi out for a spin around the block' },
          { title: 'buy groceries',   description: 'Go to Fairway and get Silk coffee creamer and lemons' },
          { title: 'clean apartment', description: 'A hopeless task! It's a mess!' },
          { title: 'do taxes',        description: 'File for extension for 2018' },
          { title: 'gaming',          description: "Play Pearl's Peril, June's Journey, Crosswords, and Ruzzle on iPad' }
      ]
    }
    this.handleClick  = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDesc   = this.handleDesc.bind(this);
  }
  handleSubmit(event) {
    alert('Submitted!');
    this.setState({title: '',
                     description: ''
                   })

  }

  handleClick(event) {
    this.setState({title: event.target.value});

  }

  handleDesc(event) {
    this.setState({description: event.target.value});

  }

  render() {
    return (
      <form className="ToDoForm" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.handleClick.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Description
            <input type="description" name="description" value={this.state.description} onChange={this.handleDesc.bind(this)}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>

    );
  }

}

export default ToDoForm;
