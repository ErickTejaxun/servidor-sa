const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Probando despliegues automaticos con ansible. Hora del despliegue: " + Date.now());
});

module.exports = router;