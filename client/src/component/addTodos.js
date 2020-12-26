import React ,{ useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const AddTodos = () => {
    
    const [job, setJob] = useState('')
    const  {addTodos}= useContext(GlobalContext)
    const _handelSubmit = (e)=>{
            e.preventDefault(); 
            console.log(job);
            addTodos({job})
            setJob('')
            }
    
    return (
        <div className="row">
                    <div className="col s12 ">
                        <form  onSubmit={_handelSubmit}>
                            <div className="input-field">
                                <label htmlFor="job" >Add new task</label>
                                <input required type="text" className="grey-text text-darken-4" className="validate" value={job} onChange={(e)=>{ setJob(e.target.value)}}/> 
                            </div>
                        </form>
                    </div>
        </div>
    );
}

export default AddTodos;
