import React, {useState} from 'react';
import firebase from '../firebase';

export default function Form() {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const createTodo = () => {
    const todoRef = firebase.database().ref('/Todo')
    const todo = {
      title,
      completed: false
    }
    todoRef.push(todo);
  }
    return (
        <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={createTodo}>Add Todo</button>
        </div>
    )
}