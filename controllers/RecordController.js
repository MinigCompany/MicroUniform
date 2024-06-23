const { response } = require("express");
const RecordModel = require("../models/Record");

const Historial =  ((req, res)=>{
    RecordModel.find()
    .sort({ saldo: 1 })
    .then(Historial =>{
        res.status(200).json({
            Historial,
            status:true
        })
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener el historial",status:false });
    })
})
const allInputs =  ((req, res)=>{
    let historial_ID = req.params.historial_ID;
    RecordModel.findById(historial_ID)
    .then(historial =>{
        if (historial) {
            let entradas = historial.uniforme.entradas;
            res.status(200).json({entradas,status:true});
        } else {
            res.status(404).json({ message: "Uniforme no encontrado",status:false });
        }
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener el uniforme por su identificador",status:false });
    })
});
const allOutputs =  ((req, res)=>{
    let historial_ID = req.params.historial_ID;
    let entrada_ID = req.body.entrada_ID;
    RecordModel.findById(historial_ID)
    .then(historial =>{
        if (historial) {
            let salidas=[];
            const entrada = historial.uniforme.entradas;
            for(let i=0;i < entrada.length; i++){
                let salida = entrada[i];
                if(salida._id==entrada_ID){
                    salidas = salida.salidas;
                }
            }
            res.status(200).json({salidas,status:true});
        } else {
            res.status(404).json({ message: "Uniforme no encontrado",status:false });
        }
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener el uniforme por su identificador",status:false });
    })
});

module.exports = {
    Historial,allInputs,allOutputs
}