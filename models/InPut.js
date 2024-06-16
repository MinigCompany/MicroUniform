const mongoose = require("mongoose");
const schema = mongoose.Schema;
const OutPut = require("./OutPut");
const EntranceSchema = new schema({
    fecha:{
        type: Date
    },
    cantidad:{
        type: Number
    },
    salidas:[OutPut]
},{timestamps:true})

module.exports = EntranceSchema;
