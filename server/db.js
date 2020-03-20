import mongodb, { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

export const dbClient = MongoClient.connect(url)