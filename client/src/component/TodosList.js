

import React,{ useContext , useEffect , useState} from 'react';
import  { GlobalContext } from '../context/GlobalState';


const TodosList = () => {

    const { todos,getTodos,deleteTodos}= useContext(GlobalContext)
    const [Del, setDel] = useState(false);
    useEffect(()=>{  getTodos(); return()=>setDel(false) },[Del])


    return (
        <div className="collection todo">
            {  todos.length?(todos.map(el=>{
                return( 
                        <div className="collection-item" key={el._id}>
                            {el.job}
                            <span style={{color:'red', marginLeft:'20px', fontSize:"20px" }}
                             onMouseOver={(e)=>{e.target.style.cursor="pointer"}}
                             onClick={(e)=>{deleteTodos(el._id) ; setDel(true)}}>
                                <b>X</b>
                            </span>
                        </div>
                )
            })):(<p className="center">Nothing To Do</p>)
                
            }
        </div>
    );
}

export default TodosList;
