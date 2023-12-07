import axios from 'axios';


export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: { todos: response.data } });
  } catch (error) {
    console.error('Error fetching TODOs:', error);
  }
};

export const addTodo = (title) => async (dispatch) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    });
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: { todo: response.data } });
  } catch (error) {
    console.error('Error adding TODO:', error);
  }
};

export const toggleTodo = (id) => async (dispatch, getState) => {
  const todos = getState().todos.todos;
  const todo = todos.find((t) => t.id === id);

  try {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: !todo.completed,
    });
    dispatch({ type: 'TOGGLE_TODO_SUCCESS', payload: { id } });
  } catch (error) {
    console.error('Error toggling TODO:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({ type: 'DELETE_TODO_SUCCESS', payload: { id } });
  } catch (error) {
    console.error('Error deleting TODO:', error);
  }
};

export const setSortBy = (sortBy) => ({
     type: 'SET_SORT_BY',
      payload: { sortBy } 
    });
export const setFilterBy = (filterBy) => ({
     type: 'SET_FILTER_BY',
      payload: { filterBy } 
    });