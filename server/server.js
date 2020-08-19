//Ponerlo como primer archivo asi decide de una en que puerto va a air
require("./config/config");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//Esto son MIDDWARE, es decir cada peticion que nosotros hagamos primero pasa por esta linea

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

//*** */

//Mostrar registros
app.get("/usuario", (req, res) => {
    res.json("getUsuario");
});
//Crear nuevos registros
app.post("/usuario", (req, res) => {
    let body = req.body;
    res.json({ persona: body });
});
//Actualizar registros
app.put("/usuario/:id", (req, res) => {
    let id = req.params.id;
    res.json({
        id,
    });
});
//Eliminar registro
app.delete("/usuario", (req, res) => {
    res.json("deleteUsuario");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});
