import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
// import Todo from './model/todo.model.js';
import todoRoutes from './routes/todo.routes.js';

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

//used to write rest apis
const app = express();

//for the server PORT
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

const CONNECTION_URL = 'mongodb+srv://pallavi_user:pallaviuser21@cluster0.nrucf.mongodb.net/todos';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });
const conn = mongoose.connection;

conn.once('open', () => {
    console.log("DB connection successful");
}, (error) => {
    console.log(error.message);
});

//const todoRoutes = express.Router();
app.use('/todos', todoRoutes);

// todoRoutes.route('/').get(function(req, res) {
//     Todo.find({}, (err, data) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.send(data);
//         }
//     })
// });

// todoRoutes.get('/:id', (req, res) => {
//     let id = req.params.id;
    
//     Todo.findById({_id: id}, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

// todoRoutes.post('/create', (req, res) => {
//     if(req.body) {
//         Todo.create(req.body)
//         .then((data) => res.json(data))
//         .catch((error) => console.log(error));
//     } else {
//         res.send({error: 'Content not available'});
//     }
// });

// todoRoutes.put('/editTodo/:id', (req, res) => {
//     let id = req.params.id;
//     if(req.body) {
//         Todo.findByIdAndUpdate({_id: id}, req.body)
//         .then((data) => res.json(data))
//         .catch((error) => console.log(error));
//     } else {
//         res.send({error: 'Content not available'});
//     }
// });

// todoRoutes.delete('/deleteTodo/:id', (req, res) => {
//     let id = req.params.id;
//     Todo.findByIdAndRemove({_id: id})
//         .then((data) => res.json(data))
//         .catch((error) => console.log(error));
// });

//localhost:5000/todos  => retrieve all the content
//localhost:5000/todos/add => 

