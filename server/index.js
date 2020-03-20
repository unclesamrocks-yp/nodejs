import express from 'express'
import api from './api/' // /index.js

import session from 'express-session'
import connectMongo from 'connect-mongo'



const MongoStore = connectMongo(session)

const app = express()

const options = {
	url: 'mongodb://localhost:27017',
	dbName: 'shop'
}

app.use(session({
	secret: 'simple-store',
	store: new MongoStore(options)
}))

// app.use((req, res) => {
// 	const {
// 		id
// 	} = req.session

// })

app.get('/', (req, res, next) => {
	res.send(`
		<div>fasdf</div>
	`)
})
app.use(api)

app.listen(3000, () => {
	console.log('Сервер запущен на порту 3000')
})
