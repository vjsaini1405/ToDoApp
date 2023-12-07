import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
    yield put({ type: 'FETCH_TODOS_SUCCESS', payload: { todos: response.data } });
  } catch (error) {
    console.error('Error fetching TODOs:', error);
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/todos', {
      title: action.payload.title,
      completed: false,
    });
    yield put({ type: 'ADD_TODO_SUCCESS', payload: { todo: response.data } });
  } catch (error) {
    console.error('Error adding TODO:', error);
  }
}

function* toggleTodoSaga(action) {
  try {
    yield call(axios.put, `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`, {
      completed: !action.payload.completed,
    });
    yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: { id: action.payload.id } });
  } catch (error) {
    console.error('Error toggling TODO:', error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`);
    yield put({ type: 'DELETE_TODO_SUCCESS', payload: { id: action.payload.id } });
  } catch (error) {
    console.error('Error deleting TODO:', error);
  }
}

function* todoSaga() {
  yield takeLatest('FETCH_TODOS', fetchTodosSaga);
  yield takeLatest('ADD_TODO', addTodoSaga);
  yield takeLatest('TOGGLE_TODO', toggleTodoSaga);
  yield takeLatest('DELETE_TODO', deleteTodoSaga);
}

export default todoSaga;