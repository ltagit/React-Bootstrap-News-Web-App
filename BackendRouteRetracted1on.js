const express = require('express');
const router = express.Router();
const request = require('request');


    let url = "https://content.guardianapis.com/search?api-key=RETRACTED&section=(sport|business|technology|politics)&show-blocks=all";
    let options = {json: true};

    console.log("Accessing Guardian Home: ");
    router.get('/', function(req, res, next) {
        request(url, options, (error, resa, body) => {
            if (error) {
                return  console.log(error)
            };
        
            if (!error && resa.statusCode == 200) {
                    res.json(body);      
            };
        });
      });

module.exports = router;
