import React, { Component } from 'react';
import { updateTodo } from '../../actions/todosActions';

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          formTodo: {
            id: '',
            title: '',
            description: ''
          }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
      this.setState({
        formTodo: this.props.todo
      })
    }
 
    handleChange(event){
      let todo = {
          ...this.state.formTodo,
          [event.target.name]: event.target.value
      }
      this.setState({ formTodo: todo })
    }
    
    handleSubmit(){
        this.props.dispatch(this.props.action(this.state.formTodo))
    }

  render() {
    return (
      <div>
        <input type="text" placeholder="title" name="title" value={this.state.formTodo.title} onChange={this.handleChange}/>
        <input type="text" placeholder="description" name="description" value={this.state.formTodo.description} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Create</button>
      </div>
    );
  }
}

export default TodoForm
