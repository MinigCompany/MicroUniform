const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OutPutSchema = new schema({
    fecha:{
        type: Date
    },
    nombreTrabajador:{
        type: String
    },
    cantidad:{
        type: Number
    },
    udm:{
        type: String
    },
    observacion:{
        type: String
    },
},{timestamps:true})

module.exports = OutPutSchema;