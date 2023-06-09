require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

require("./app/routes")(app); 


const{ HOST, PORT, MONGO_URI} = process.env;

// app.listen(PORT,() => {
//     console.log(`conectad en ${HOST}:${PORT}`);
// });



mongoose.connect(MONGO_URI).then(() =>{
    app.listen(PORT,() => {
        console.log(`base de datos conectada en ${HOST}:${PORT}`);
    });
});
