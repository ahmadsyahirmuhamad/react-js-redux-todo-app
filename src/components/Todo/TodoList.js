import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../actions/todosActions';

import { updateTodo } from '../../actions/todosActions';

import Todo from './Todo'

class TodoList extends Component {
    componentWillMount(){
        this.props.dispatch(fetchTodos())
    }

  render() {
      const mapTodos = this.props.todos.map((todo) => {
          return <Todo
              key={todo.id}
              todo={todo}
              dispatch={this.props.dispatch}
              action={updateTodo}
            />
      })
        
    return (
      <div>
        {mapTodos}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList
