const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    let date_ob = new Date();
    res.send("Version 0.0.0.12" );
});

module.exports = router;