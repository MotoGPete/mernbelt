const PetsController = require("../controllers/pets.controller")
const Pets = require("../models/pets.model")

module.exports = app =>{
    console.log("server/routes")
    app.get("/api", PetsController.index)
    //get all
    app.get("/api/pets", PetsController.getAll)
    //get one
    app.get("/api/pets/:id", PetsController.getOne)
    //create one
    app.post("/api/pets", PetsController.addOne)
    //update one
    app.put("/api/pets/:id", PetsController.updateOne)
    //delete one
    app.delete("/api/pets/:id", PetsController.deleteOne)
}