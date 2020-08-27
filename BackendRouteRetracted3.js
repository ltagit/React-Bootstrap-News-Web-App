const express = require('express');
const router = express.Router();
const request = require('request');

    let options = {json: true};

router.post('/', (req, resa) => {
    const tester = req.body.whichurl;
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+tester+"&api-key=RETRACTED";

    console.log("Accessing Search for NYT.  Query was: ");
    console.log(tester);
    console.log("URL to be accessed is: ");
    console.log(url);
    request(url, options, (error, resb, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && resb.statusCode == 200) {
            console.log(body);
                resa.json(body);
        };
    });
    
  });
module.exports = router;
