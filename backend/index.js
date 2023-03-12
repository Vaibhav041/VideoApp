import express from 'express'
const app = express();
import userRoute from './routes/users.js'
import mongoose from 'mongoose';

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/VideoStreamingApp").then(() => console.log('connected to db')).catch((err) => {throw err})
}

app.use("/api/users", userRoute);


app.listen(9000, () => {
    connect();
    console.log('connected')
})
