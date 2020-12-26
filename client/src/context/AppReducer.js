export default (state , action)=>{

        switch(action.type){

            case 'GET_TODO':
                return{ ...state, isLoading:false, todo:action.payload }

            case 'TODO_ERROR':
                    return { ...state, error: action.payload }
            
            case 'ADD_TODO':
                return { ...state, todo:[...state.todo, action.payload ] }

            case 'DELETE_TODO':
                return {...state, todo:state.todo.filter(el=>el._id !== action.payload)}
            default: return state;
        }
            
}   