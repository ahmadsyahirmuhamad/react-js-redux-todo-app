export function fetchTodos(){
    return {
        type: "RECEIVE_TODOS",
        payload: [
            {
                id: 1,
                title: 'test 1',
                description: 'test 1'
            },
            {
                id: 2,
                title: 'test 2',
                description: 'test 2'
            }
        ]
    }
}

export function addTodo(todo){
    todo.id = Date.now()
    return {
        type: "ADD_TODO",
        payload: todo
    }
}


export function updateTodo(todo){
    return {
        type: "UPDATE_TODO",
        payload: todo
    }
}

