import Randomstring from 'randomstring';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Message from './model/Message.js';

const app = express();

app.use(express.json());
app.use(cors());


app.post('/read-message', (req, res) => {
    Message.find({ key: req.body.key }, async (err, docs) => {
        if (err) console.log(err)
        await res.send(docs)
    })
    Message.deleteOne({ key: req.body.key }, (err,doc) => console.log(err))
})

app.post('/create-message', (req, res) => {
    let randomKey = Randomstring.generate(12);
    let message = new Message({
        key: randomKey,
        message: req.body.message
    })

    message.save(err => console.log(err))
    res.status(200).send({ key: randomKey })
})

mongoose.connect('mongodb://localhost:27017/encrypteds', { useUnifiedTopology: true }, err => {
    if (err) console.log(err);
    app.listen(3001, () => console.log('server was start'))
})

app.listen(3002)