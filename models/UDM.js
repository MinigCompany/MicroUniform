const mongoose = require("mongoose");
const schema = mongoose.Schema;

const udmSchema = new schema({
    nombreUdm:{
        type: String
    },
    simbolo:{
        type: String
    },
},{timestamps:true})

const udm = mongoose.model('udm', udmSchema);
module.exports = udm;