const express = require('express');
const uploadRoute = require('./routes/upload');
const cors = require('cors');
const path = require('path');
const app = express();


app.use(express.json());
app.use(cors());
//app.use('/resized', express.static('resized'));
app.use('/uploads', express.static('uploads'));
app.use('/api', uploadRoute);
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;