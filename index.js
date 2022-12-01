const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('./middlewares/cors');



const CONNECTION_STRING = 'mongodb://localhost:27017/tools';

start()


async function start() {
    
    await mongoose.connect(CONNECTION_STRING)

    const app = express();
    app.use(express.json);
    app.use(cors());

    app.get('/', (req, res) => {
        res.json({ message: 'REST' })
    });

    app.listen(3030, () => console.log('REST service started'));

}
