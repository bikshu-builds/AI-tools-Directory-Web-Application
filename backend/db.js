const dotenv=require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()

const mongoUrl =process.env.mongourl
const dbName = 'aitools';
const client = new MongoClient(mongoUrl);

let db;

async function connectDB() {
    await client.connect();
    console.log('✅ MongoDB connected');
    db = client.db(dbName);
}

function getDB() {
    if (!db) {
        throw new Error('❌ Database not connected yet.');
    }
    return db;
}

module.exports = { connectDB, getDB };