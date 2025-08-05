import express from 'express'
import morgan from 'morgan'
import path from 'path'
import routes from './routes/routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.static(path.resolve('public')))

app.use('/', routes)


app.listen(3000)