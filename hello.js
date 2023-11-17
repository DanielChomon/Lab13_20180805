var cors = require('cors')
const app = exp

app.use(cors())


app.get("/trabajadores/:dni", (req,res) => {
    let dni = req.params.dni;

    console.log("nombre: ", nombre , "| apellido: ", apellido, "| correo: ", correo);

    let myJson = {
        nombre : nombre,
        apellido: apellido,
        correo: correo,
    };
    res.json(myJson);
});