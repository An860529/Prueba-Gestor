module.exports = (app) => {
    app.use("/api/v1/auth", require("./auth.route") );
    // app.use("/api/v1/profile", require("./profile.route") );
    // app.use("/api/v1/publication", require("./publication.route") )

    
};

const cors = require("cors");
const express = require("express");

const app = express()
const port = 3500

app.use(
    express.urlencoded({
        extended: true
    })
    )

app.use(
    express.json({
        type: "*/*"
    })
)

app.use(cors());

app.get('/prueba', (req, res) =>{
    res.send('hola, estoy funcionando')
})

app.listen(port,() =>{
    console.log('estoy ejecutandome en http://localhost:${port}')
})

// import autControlller from "../controllers/aut.controller.js";

// router.post("/saveTask", auth, au.saveTask);
// router.post("/saveTaskImg", mult, formatFile, auth, au.saveTaskImg);
// router.get("/listTask", auth, au.listTask);
// router.put("/updateTask", auth, board.updateTask);
// router.delete("/deleteTask/:_id", auth, validId, board.deleteTask);

// export default router;