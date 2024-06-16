const mongoose = require('mongoose');
const URI= 'mongodb+srv://celiamacas24:TKZIbzn7RYYZLW7M@cluster2.p7domfy.mongodb.net/MinigCompany?retryWrites=true&w=majority&appName=Cluster2';
//const URI = 'mongodb://localhost:27017/MinigCompany';
const connection = mongoose.connect(
    URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));

module.exports = connection;