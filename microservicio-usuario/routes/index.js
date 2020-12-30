const express = require("express");
const router = express.Router();
const conn = require('../conexion');

router.get('/', (req, res) => {
    let date_ob = new Date();
    res.send("Version 0.0.0.xxxxyyyyb" );
});

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
            res.send({            
                status: "error",
                message: "Ocurrió un error inesperado."
            });
        } else {
            if (results.length === 1) {
                //console.log(results[0])
                res.send({
                    status: 'success',
                    data: results,
                    message: 'Usuario autenticado de manera exitosa.'
                    
                });
            } else {
                console.log("error2")
                res.send({ 
                    status: "error",
                    message: "Las contraseña es incorrecta o el usuario no existe."
                });
            }
        }
    });
});

router.post('/login-proveedor', (req, res) => {
    const { email, contrasena } = req.body;
    const sql = `SELECT * FROM Usuario WHERE email='${email}' AND contrasena='${contrasena}'`;
    console.log(sql);
    const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            console.log("error1")
            res.send({ 
                status: "error",
                message: "Ocurrió un error inesperado."
            });
        } else {
            if (results.length === 1) {
                res.send({
                    status: 'success',
                    data: results,
                    message: 'Usuario autenticado de manera exitosa.'
                    
                });
            } else {
                console.log("error2")
                res.send({ 
                    auth: false,
                    result:  "'status': 'error','message': 'Las contraseña es incorrecta o el usuario no existe o duplicado'"
                });
            }
        }
    });
});

/*El registro se probo en postman con esta cadena --Eliu
{
    "nombre":"Eder",
    "apellido":"García",
    "email":"eder@usac.com",
    "contrasena":"SuperSegura",
    "celular":12345678
}*/
router.post('/registrar-cliente', (req, res) => {
    const { nombre, apellido, email, contrasena, celular } = req.body;
    let sql = `call nuevo_usuario('${nombre}','${apellido}','EsCliente','${email}','${contrasena}',${celular},'dirCliente',0)`;
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.send({ auth: false,
                status: "error",
                message: "Ocurrió un error inesperado."
                    
                    });
        } else {
            var primero = results[0];
            console.log("resultado "+JSON.stringify(primero[0]));
            var cad = JSON.stringify(primero[0]);

           if(cad=='{"1":"1"}'){           
            res.send({ 
                    status: "success",
                    data: results,
                    message: "Usuario creado de manera exitosa."  
             });
            }else if(cad=='{"-1":"-1"}'){
                res.send({ 
                    status: "error",
                    message: "Ya existe un usuario registrado con ese correo electrónico."
                    
                 });
                }
        }
    });
});

router.post('/registrar-proveedor', (req, res) => {
    const { nombre, apellido, empresa, email, contrasena, direccion } = req.body;
    let sql = `call nuevo_usuario('${nombre}','${apellido}','${empresa}','${email}','${contrasena}',0,'${direccion}', 1)`;
    console.log("query "+sql);
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.send({ auth: false,
                status: "error",
                message: "Ocurrió un error inesperado."
                    
                    });
        } else {
            var primero = results[0];
            console.log("resultado "+JSON.stringify(primero[0]));
            var cad = JSON.stringify(primero[0]);

           if(cad=='{"1":"1"}'){           
            res.send({ 
                    status: "success",
                    data: results,
                    message: "Usuario creado de manera exitosa."  
             });
            }else if(cad=='{"-1":"-1"}'){
                res.send({ 
                    status: "error",
                    message: "Ya existe un usuario registrado con ese correo electrónico."
                    
                 });
                }
        }
    });
});

module.exports = router;