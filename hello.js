var cors = require('cors')
const app = exp

app.use(cors())

pp.get("/trabajadores",(req, res) => {
    let sql = "select * from trabajadores";
    conn.query(sql,(err, result, fields) => {
        if(err) throw err;

        let horaActual = new Date();

        for(let i = 0; i < result.length;i++ ){
            result[i]["job_id"] += "_HOLAAAA"
        }

        res.json({
            horaActual: horaActual,
            trabajadores: result
        });
    });

    pp.get("/sedes",(req, res) => {
        let sql = "select * from sedes";
        conn.query(sql,(err, result, fields) => {
            if(err) throw err;

            let horaActual = new Date();

            for(let i = 0; i < result.length;i++ ){
                result[i]["job_id"] += "_HOLAAAA"
            }

            res.json({
                horaActual: horaActual,
                sedes: result
            });
        });
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