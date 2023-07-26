const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", true);

// mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ajfevyz.mongodb.net/chatAppMern?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ajfevyz.mongodb.net/`, () => {
    console.log('connected to mongodb');
})

