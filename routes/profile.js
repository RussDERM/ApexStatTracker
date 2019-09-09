// * Route requirements
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

// API CALL
router.get('/:platform/:gamertag', async (req, res) => {
  try {
      const headers = {
          'TRN-Api-Key': process.env.TRACKER_API_KEY
      }
    //   destructuring params
    const {platform, gamertag} = req.params;
    //   response
    const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
    {
        headers
    })

    const data = await response.json();

    res.json(data);


  } catch (err) {
      console.log(err);
      res.status(500).json({
          message: 'unknowable server error'
      })
      
      
  }


});

// export routes
module.exports = router;