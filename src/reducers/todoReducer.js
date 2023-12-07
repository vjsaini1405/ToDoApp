const initialState = {
    todos: [],
    sortBy: 'recent', // or 'id'
    filterBy: 'all', // or 'active' or 'done'
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return { ...state, todos: action.payload.todos };
      case 'ADD_TODO_SUCCESS':
        return { ...state, todos: [...state.todos, action.payload.todo] };
      case 'TOGGLE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'DELETE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      case 'SET_SORT_BY':
        return { ...state, sortBy: action.payload.sortBy };
      case 'SET_FILTER_BY':
        return { ...state, filterBy: action.payload.filterBy };
      default:
        return state;
    }
  };
  
  export default todoReducer;