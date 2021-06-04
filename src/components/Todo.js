import React from 'react';
import firebase from '../firebase';

export default function Todo({todo}){
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('/Todo').child(todo.id);
    todoRef.remove();
  }

  const completeTodo = () => {
    const todoRef = firebase.database().ref('/Todo').child(todo.id);
    todoRef.update({
      completed: !todo.completed
    });
  }

  return(
    <div>
      <h3 className={todo.completed ? 'completed' : ''} >{todo.title}</h3>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Completed</button>
    </div>
  )
}