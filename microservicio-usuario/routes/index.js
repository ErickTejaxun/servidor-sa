const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    let date_ob = new Date();
    res.send("Probando despliegues automaticos con ansible. Hora del despliegue:  10.001" );
});

module.exports = router;