import express from 'express'
import api from './api/' // /index.js

const app = express()

app.get('/', (req, res) => {
	res.send(`
		<div>fasdf</div>
	`)
})
app.use(api)

app.listen(3000, () => {
	console.log('Сервер запущен на порту 3000')
})
