const express = require("express");
const router = express.Router();
const conn = require('../conexion');

router.get('/', (req, res) => {
    let date_ob = new Date();
    res.send("Version 0.0.0.xxxxyyyy" );
});

module.exports = router;

/*El login se probo en postman con esta cadena --Eliu
{
    "email":"eder@usac.com",
    "contrasena":"SuperSegura"
}*/
router.post('/login-cliente', (req, res) => {
    const { email, contrasena } = req.body;
    const sql = `SELECT * FROM Usuario WHERE email='${email}' AND contrasena='${contrasena}'`;
    console.log(sql);
    const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            console.log("error1")
            res.send({ auth: false });
        } else {
            if (results.length === 1) {
                //console.log(results[0])
                res.send({
                    auth: true,
                    result: results[0]
                });
            } else {
                console.log("error2")
                res.send({ auth: false });
            }
        }
    });
});