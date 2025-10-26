const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataroutes');
const { connectDB } = require('./db');
const dotenv=require('dotenv')

dotenv.config()

const PORT=process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', dataRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Backend server running at http://localhost:5000');
    });
}).catch(err => {
    console.error('❌ Failed to connect to MongoDB:', err);
});
