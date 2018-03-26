// import React, { Component } from 'react';
import React from 'react';

// Post = (props) =>  map((todos, index) =>  {... todos}
// );
//
// export default Post;

function Post(props) {
  return <li>{props.todo}</li>;
}

function PostList() {
  // const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  const todos  = [
         "title: 'walk the cat' ", "description: 'take Yogi out for a spin around the block' ",
         "title: 'buy groceries' ", "description: 'Go to Fairway and get Silk coffee creamer and lemons'",
         "title: 'clean apartment' ","description: 'A hopeless task! It's a mess!' ",
         "title: 'do taxes' ",       "description: 'File for extension for 2018' ",
         "title: 'gaming' ",         "description: 'Play Pearl's Peril, June's Journey, Cody Crosswords, and Ruzzle on iPad' "
    ]

  return (
    <ul>
      {todos.map((todo) => <Post key={todo} todo={todo} />)}
    </ul>
  );
}

// export default Post;
export default PostList;
