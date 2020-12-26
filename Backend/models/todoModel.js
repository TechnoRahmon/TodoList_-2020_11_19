const mongoose = require('mongoose'); 

const Schema =  mongoose.Schema; 

const TodoSchema = new Schema({
        job : { type: String, required:[true , 'Please add some text']}, 
        
        createAt : { type:Date , default:Date.now}
})

module.exports = mongoose.model('Todos', TodoSchema)