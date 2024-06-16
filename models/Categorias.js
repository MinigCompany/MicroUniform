const mongoose = require("mongoose");
const schema = mongoose.Schema;

const categoriaSchema = new schema({
    nombreCategoria:{
        type: String
    },
},{timestamps:true})

const categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = categoria;