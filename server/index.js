import express from 'express'
import api from './api/'

const app = express()

app.use(api)

app.listen(3000, () => {
	console.log('Сервер запущен на порту 3000')
})
