
const router = require('express').Router()
const { getTodos , addTodos , deleteTodos } = require('../controllers/todoController')

router
    .route('/')
    .get(getTodos)
    .post(addTodos)

router
    .route('/:id')
    .delete(deleteTodos)



module.exports =  router; 
