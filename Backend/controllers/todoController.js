const Todo = require('../models/todoModel')

// getTodos  , addTodos , deleteTodos 

// @des GET todo data  todo @route  POST /api/v1/todos @access public
exports.getTodos = async (req,res,next)=>{
    try{
        const todos = await Todo.find()
        return res.status(200).json({ success:true , count: todos.length, data: todos })
    }
    catch(err){
        return res.status(500).json({ success:false , error:'Server Error'})
    }
}



// @des Add new todo @route  POST /api/v1/todos/:id @access public
exports.addTodos= async (req,res ,next)=>{

    try{    const {job} = req.body;
        const todos = await Todo.create(req.body); 
        return res.status(201).json({ success: true, data:todos})
    }
    catch(er){

        if (er.name == 'ValidationError'){
            const messages = Object.values(er.errors).map(val =>val.message)
            return res.status(400).json({success:false, error:messages});

        }  else return res.status(500).json({success:false, error:'Server Erorr'});
    }
}

// @des delete todo @route  DELETE /api/v1/todos @access public

exports.deleteTodos =  async (req, res ,next)=>{

        try{    // get the elment 
                const todos= await Todo.findById(req.params.id)
                if (!todos) return res.status(404).json({success:false, error:'NO todos found'})
                await todos.deleteOne()
                return res.status(200).json({success:true, data:{}})
        }       
        catch(er) {return res.status(500).json({success:false, error:'Server Error'}) }
}