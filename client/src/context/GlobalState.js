import React, {  createContext,useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import App from '../App';

const initialState = { todo:[] , isLoading:true , error:null }
export const GlobalContext = createContext(initialState); 

export const GlobalProvider = ({children}) =>{
        const [state , disp ] = useReducer(AppReducer,initialState)

    
    const getTodos = async()=>{
            try{
                 const res= await axios.get('/api/v1/todos')
                disp({ type:'GET_TODO' , payload: res.data.data})
            }
            catch(err){ console.log(err);
                disp({ type:'TODO_ERROR' , payload: err.response.data.error})
        }
    }
    const deleteTodos = async(id)=>{
        try{
             const res= await axios.delete('/api/v1/todos/'+id)
            disp({ type:'DELETE_TODO' , payload:res.data.data})
        }
        catch(err){disp({ type:'TODO_ERROR' , payload: err.response.data.error})
        }
    }

    const addTodos = async(todo)=>{
        
            const config={ headers:{accept :'application/json',} ,data:{}, };
             const res= await axios.post('/api/v1/todos',todo,config)
             try{ disp({ type:'ADD_TODO' , payload: res.data.data})
        }
        catch(err){disp({ type:'TODO_ERROR' , payload: err.response.data.error})
        }
    }
    return( 
            <GlobalContext.Provider value={{ todos:state.todo , isLoading:state.isLoading, 
                                            error:state.error,getTodos,addTodos,deleteTodos }}>
                {children}
            </GlobalContext.Provider>
    )
}



