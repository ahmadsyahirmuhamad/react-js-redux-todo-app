const initialState = {
    todo: {
        id: '',
        title: '',
        description: '',
    },
    todos: [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer (state=initialState, action) {
    switch(action.type){
        case "FETCH_TODOS_START": {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "RECEIVE_TODOS": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                todos: action.payload
            }
            break;
        }
        case "RECEIVE_TODO": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                todo: action.payload
            }
            break;
        }

        case "FETCH_TODOS_ERROR": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case "ADD_TODO": {
            return {
                ...state,
                todos: [action.payload].concat(state.todos),
                error: false
            }
            break;
        } 

        case "UPDATE_TODO": {
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (todo.id === action.payload.id) {
                        return action.payload
                    } else {
                        return todo
                    }
                })
            }
            break;
        } 

        default: {
            return state;
        }
    }
    return state;
}