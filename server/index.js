import express from 'express'

const app = express()

app.get('/api/qwe', (req, res) => {
	res.send('qwe')
})

app.listen(3000, () => {
	console.log('Сервер запущен на порту 3000')
})
