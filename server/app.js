import express from 'express';
import fileUpload from 'express-fileupload';
import productRoutes from './routes/routes.js';

const app = express()

// middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

// routes
app.use(productRoutes)

export default app