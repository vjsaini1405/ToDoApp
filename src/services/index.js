const url = "https://jsonplaceholder.typicode.com/todos";
const limit = 20;

export const API = {
  getTodoList: async (requestData) => {
    // console.log("resuestData",requestData);
    try {
      const response = await fetch(`${url}?_page=${requestData}&_limit=${limit}`);
      const data = await response.json();
      const totalItems= response.headers.get('x-total-count');
      // console.log(data);
      return {data,totalItems};
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};