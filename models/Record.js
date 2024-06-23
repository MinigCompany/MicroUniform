const mongoose = require("mongoose");
const schema = mongoose.Schema;
const RecordSchema = new schema({
    uniforme: {type: mongoose.Schema.Types.Mixed}
},{timestamps:true})

const record = mongoose.model('Historial', RecordSchema);
module.exports = record;