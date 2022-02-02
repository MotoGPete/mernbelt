const Pets = require("../models/pets.model")
const PetsRoutes = require("../routes/pets.routes")
// index 
module.exports.index = (req,res) => {
    res.json({"message":"its working"})
}
//get all
module.exports.getAll = (req, res) =>{
    //consol.log("made it to the controller")
    Pets.find()
    .then(pets=> res.json(pets))
    .catch(err=>res.json(err))
}
//get one
module.exports.getOne = (req, res) => {
    Pets.findOne({_id: req.params.id})
    .then(pets=> res.json(pets))
    .catch(err=>res.json(err))

}
//create one
module.exports.addOne = (req,res) => {
    Pets.create(req.body)
    .then(newPets => res.json(newPets))
    .catch(err => res.status(400).json(err))

}
//update one
module.exports.updateOne = (req, res) => {
    Pets.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(pets=>res.json(pets))
    .catch(err => res.status(400).json(err))
}
//delete one
module.exports.deleteOne = (req,res) => {
    Pets.deleteOne({_id: req.params.id})
    .then(deleted=> res.json(deleted))
    .catch(err=>res.json(err))
}
