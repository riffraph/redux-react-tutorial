const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];

        case COMPLETE_TODO: 
            return state.map(t => toggleTodo(t, action));

        default:
            return state;
    }
}


/**
 * toggle an individual todo element
 */
const toggleTodo = (state, action) => {
    if (state.id !== action.id)
        ... // todo
}


export default todosReducer;
