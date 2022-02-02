const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pets_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Whew, Establish Connection to Database"))
    .catch(err => console.log("shits all fucked up", err));