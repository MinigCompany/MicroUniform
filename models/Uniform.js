const mongoose = require("mongoose");
const schema = mongoose.Schema;
const InPutUniform = require("./InPut");
const uniformSchema = new schema({
    nombreUniforme:{
        type: String
    },
    cantidad:{
        type: Number
    },
    saldo:{
        type:Number
    },
    udm:{
        type: String
    },
    categoria:{
        type: String
    },
    detalle:{
        type: String
    },
    fecha:{
        type: Date
    },
    entradas:[InPutUniform]
},{timestamps:true})

const uniform = mongoose.model('Uniforme', uniformSchema);
module.exports = uniform;
