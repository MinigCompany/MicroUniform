const UdmModel = require("../models/UDM");

const udms =  ((req, res)=>{
    UdmModel.find()
    .then(udm =>{
        res.status(200).json({
            udm
        })
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener las unidades de medida" });
    })
})

const addUdm =  ((req, res)=>{
    let udm = new UdmModel({
        nombreUdm: req.body.nombreUdm,
        simbolo: req.body.simbolo
    });
    udm.save()
    .then(response =>{
        res.status(200).json({ message: "Unidad de medida registrada" })
    })
    .catch(err =>{
        res.status(500).json({ message: "No se puedo guardar la unidad de medida" });
    })
})
const UdmID =  ((req, res)=>{
    let udm_ID = req.params.id;
    UdmModel.findById(udm_ID)
    .then(udm =>{
        if (udm) {
            res.status(200).json({udm});
        } else {
            res.status(404).json({ message: "Unidad de medida no encontrada" });
        }
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener la UDM por su identificador "+err });
    })
})

module.exports = {
    udms,UdmID,addUdm
}