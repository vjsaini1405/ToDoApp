import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (start, limit) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        _start: start,
        _limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};