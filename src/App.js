import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends React.Component {
  render(){
    return (
      <>
      <h1>Todo list</h1>
      <Form />
      <TodoList />
      </>
      );
  }
}

export default App;
