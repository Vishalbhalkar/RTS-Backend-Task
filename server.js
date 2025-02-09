const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();
app.use(bodyParser.json());

app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/blog'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));