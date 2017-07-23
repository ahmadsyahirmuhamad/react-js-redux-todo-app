import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../../actions/todosActions';

class TodoFormUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo: {
                id: '',
                title: '',
                description: ''
            }            
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        this.setState({todo: this.props.todo})
    }

    handleChange(event){
        let todo = {
            ...this.state.todo,
            [event.target.name]: event.target.value
        }
        this.setState({ todo: todo })
    }
    
    handleSubmit(){
        this.props.dispatch(updateTodo(this.state.todo))
    }

  render() {
    return (
      <div>
        <input type="text" placeholder="title" name="title" value={this.state.todo.title} onChange={this.handleChange}/>
        <input type="text" placeholder="description" name="description" value={this.state.todo.description} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Update</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

const VisibleTodoFormUpdate = connect(
  mapDispatchToProps
)(TodoFormUpdate)


export default VisibleTodoFormUpdate
