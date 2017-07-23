import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import { addTodo } from './actions/todosActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm
          todo={this.props.todo}
          dispatch={this.props.dispatch}
          action={addTodo}
        />

        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp