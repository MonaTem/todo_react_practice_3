import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super: props;
    this.state = {
      title: '';
      description: ''
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
    this.setState({title: event.target.title});

  }

  handleDesc(event) {
    this.setState({description: event.target.description});

  }

  render {
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
