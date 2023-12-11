import {createSlice} from "@reduxjs/toolkit"

const slice =createSlice({
    name:"todo",
    initialState:{
        todoList :[],
        isLoading:false,
        filterData:[],
        totalItems:0
    },
    reducers:{
        todo:state=>{
            state.isloading=true;
        },
        todoSuccess:(state,{payload})=>{
            state.isloading=false,
            state.todoList=payload?.data
            state.totalItems=payload.totalItems
        },
        todoFailed:(state)=>{
            state.isloading=false
        },
        todoSortBy : (state) => {
            const sortedTodos = state.todoList.sort((a, b) => a.title.localeCompare(b.title));
            state.todoList= sortedTodos 
          },
        todoDelete:(state,{payload})=>{
            const updatedTodos = state.todoList.filter((todo) => todo.id !== payload);
            state.todoList= updatedTodos 
        },
        todoLodeMore:(state,{payload})=>{
            state.isloading=true
        },
        todoLodeMoreSuccess:(state,{payload})=>{
           state.todoList =[...state.todoList , ...payload.data]
            state.isloading=false
        },
        todoLoadMoreFailed:state=>{
            state.isloading=false
        },
        todoFilter:(state,{payload})=>{
         console.log("payload",payload.item)
          if (payload.item == "Active") {
      const updatedTodos = state.todoList.filter((todo) => todo.completed == false);
     state.todoList = updatedTodos
    }
    else if (item == "Done") {
      const updatedTodos = state.todos.filter((todo) => todo.completed == true);
      state.todoList = updatedTodos
    }
        },
        todoToggle:(state,{payload})=>{
            state.todoList=state.todoList.map((todo) => {
                    if (todo.id === payload) {
                      return {
                        ...todo,
                        completed: !todo.completed,
                      };
                    }
                    return todo;
                })
        }
    }
})

export const  {
    todo,
todoSuccess,
todoFailed,
todoSortBy,
todoDelete,
todoLodeMore,
todoLodeMoreSuccess,
todoLoadMoreFailed,
todoFilter,
todoToggle
} = slice.actions;

export default slice.reducer