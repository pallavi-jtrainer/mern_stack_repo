import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

//used to write rest apis
const app = express();

//for the server PORT
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

const CONNECTION_URL = 'mongodb+srv://pallavi_user:pallaviuser21@cluster0.nrucf.mongodb.net/test';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });
const conn = mongoose.connection;

conn.once('open', () => {
    console.log("DB connection successful");
}, (error) => {
    console.log(error.message);
});
