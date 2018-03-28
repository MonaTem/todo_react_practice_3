import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      summary: []
    }

    this.handleClick  = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    console.log("new state is : ", this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("title",this.state.title)
    const todos = Object.assign([], this.state.todos);
    const summary = Object.assign([], this.state.summary);
    todos.push(this.state.title)
    summary.push(this.state.description)
    console.log("todos:", todos)
    this.setState({
      todos : todos, // [...this.state.todos, this.state.title]
      summary: summary
    })

  }



  render() {
    const todos = this.state.todos;
    const title = todos.map((el, i) => {
        return(<li key={i}>{el}</li>);
    })

    const summary = this.state.summary;
    const description = summary.map((el, i) =>{
      console.log("el", el)
      return(<p key={i}>{el}</p>)
    })

    return (
      <div>
        <form className="ToDoForm" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label value="Title">Title</label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <label value="Description">Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <button value="Submit" onSubmit={this.handleSubmit.bind(this)}>Submit</button>
          </div>
        </form>
        <br/>
        <ul>{title}</ul>
        <ul>{description}</ul>
     </div>
    );
  }

}

export default ToDoForm;
