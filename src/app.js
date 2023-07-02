import express from 'express'
import businessRoutes from './routes/business.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

// Middewares
app.use(express.json())

// Routes
app.use('/', indexRoutes)
app.use('/api', businessRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;