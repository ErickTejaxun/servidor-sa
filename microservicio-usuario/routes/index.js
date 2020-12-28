const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    let date_ob = new Date();
    res.send("Probando despliegues automaticos con ansible. Hora del despliegue: " + date_ob.getHours() +"-"+date_ob.getMinutes()+ "-"+date_ob.getSeconds();
});

module.exports = router;