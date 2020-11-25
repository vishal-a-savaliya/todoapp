import React, {Component} from 'react';
import Todos from './todo.js';


class App extends Component {
  state={
    todos:[ { id : 1 , content: 'make todo app'}, 
            { id : 2 , content: 'post on linkdin'} ]
  }

  deleteTodo = (id) =>{
    console.log(id);
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    
    this.setState({
      todos:todos
    })
  }

  render(){

    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
    
  }
  
}

export default App;
