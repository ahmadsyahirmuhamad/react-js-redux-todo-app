import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
          toggleForm: false
        }

        this.handleToggleForm = this.handleToggleForm.bind(this)
        this.showUpdateForm = this.showUpdateForm.bind(this)
    }

    handleToggleForm(event) {
      this.setState({toggleForm: !this.state.toggleForm})
    }
    
  showUpdateForm(){
    if (this.state.toggleForm) {
      return(
        <div>
          <TodoForm
            todo={this.props.todo}
            dispatch={this.props.dispatch}
            action={this.props.action}
          />
          
          <button onClick={this.handleToggleForm}>Toggle</button>
          
        </div>
      )
    } else {
      return(
        <div>
          <button onClick={this.handleToggleForm}>Toggle</button>
        </div>
      )
    }
  }
  
  render() {  
    return (
      <div>
        <p>{this.props.todo.title}</p>
        {this.showUpdateForm()}
      </div>
    );
  }
}



export default Todo
