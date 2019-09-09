// * Route requirements
const express = require('express');
const router = express.Router();

// API CALL
router.get('/:platform/:gamertag', (req, resp) => {
    console.log(req.params.platform, req.params.gamertag);
    resp.send('Hola!')
});

// export routes
module.exports = router;