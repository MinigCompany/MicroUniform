const CategoriaModel = require("../models/Categorias");

const caregories =  ((req, res)=>{
    CategoriaModel.find()
    .then(Category =>{
        res.status(200).json({
            Category
        })
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener las categorias" });
    })
})
const addCategory =  ((req, res)=>{
    let category = new CategoriaModel({
        nombreCategoria: req.body.nombreCategoria,
    });
    category.save()
    .then(response =>{
        res.status(200).json({ message: "Categoria registrada" })
    })
    .catch(err =>{
        res.status(500).json({ message: "No se puedo guardar la categoria" });
    })
})
const categoryID =  ((req, res)=>{
    let category_ID = req.params.id;
    CategoriaModel.findById(category_ID)
    .then(categoria =>{
        if (categoria) {
            res.status(200).json({categoria});
        } else {
            res.status(404).json({ message: "Categoria no encontrada" });
        }
    })
    .catch(err =>{
        res.status(500).json({ message: "no se puedo obtener la categoria por su identificador "+err });
    })
})
module.exports = {
    caregories,addCategory,categoryID
}