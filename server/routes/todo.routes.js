import express from 'express';

import Todo from '../model/todo.model.js';

const todoRoutes = express.Router();

todoRoutes.route('/').get(function(req, res) {
    Todo.find({}, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
});

todoRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    
    Todo.findById({_id: id}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

todoRoutes.post('/create', (req, res) => {
    if(req.body) {
        Todo.create(req.body)
        .then((data) => res.json(data))
        .catch((error) => console.log(error));
    } else {
        res.send({error: 'Content not available'});
    }
});

todoRoutes.put('/editTodo/:id', (req, res) => {
    let id = req.params.id;
    if(req.body) {
        Todo.findByIdAndUpdate({_id: id}, req.body)
        .then((data) => res.json(data))
        .catch((error) => console.log(error));
    } else {
        res.send({error: 'Content not available'});
    }
});

todoRoutes.delete('/deleteTodo/:id', (req, res) => {
    let id = req.params.id;
    Todo.findByIdAndRemove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => console.log(error));
});

export default todoRoutes;
