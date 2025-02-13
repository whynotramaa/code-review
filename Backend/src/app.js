import express from "express";
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express() // made the server but we havent started it yet

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{ // making test route
    res.send('yoooo new app')
})

app.use('/ai', aiRoutes)

export default app 