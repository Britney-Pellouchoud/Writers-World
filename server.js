const express = require('express');
const connectDB = require('./config/db');
const path = require('path');


const app = express();

//Connect Database
connectDB();    

//Init Middleware
const bodyParser = require('body-parser')
//app.use(express.json());


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(2000)

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));