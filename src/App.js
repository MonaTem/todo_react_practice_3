import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm.js';
import Post from './Post.js';
import PostList from './Post.js'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {todos : [
    //       { title: 'walk the cat',    description: 'take Yogi out for a spin around the block' },
    //       { title: 'buy groceries',   description: 'Go to Fairway and get Silk coffee creamer and lemons' },
    //       { title: 'clean apartment', description: 'A hopeless task! It\U+0027s a mess!' },
    //       { title: 'do taxes',        description: 'File for extension for 2018' },
    //       { title: 'gaming',          description: 'Play PearlU+0027s Peril, JuneU+0027s Journey, Cody Crosswords, and Ruzzle on iPad' }
    //   ]
    // }
  }

  render() {
    return (
      <div className="App">
        <ToDoForm/>
      {/* <Postlist todos={this.state.todos/> */}
        <PostList/>
      </div>
    );
  }
}

export default App;
