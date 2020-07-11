const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const routes = require('./routes');


const app = express();

mongoose.connect('mongodb://root:itl2727@omnistack-shard-00-00.dyqdg.mongodb.net:27017,omnistack-shard-00-01.dyqdg.mongodb.net:27017,omnistack-shard-00-02.dyqdg.mongodb.net:27017/omnistack?ssl=true&replicaSet=atlas-ybsp3z-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = Acessar query params (para filtros)
//req.params = Acessar router params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);