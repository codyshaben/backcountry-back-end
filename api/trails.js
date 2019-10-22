const express = require('express')
const router = express.Router() 
const request = require('request');

const allTrails = []

request('https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=200603620-a27f4d07df1f945df4e225ea302ec3c7', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }  
    body.trails.forEach(trail => {
      allTrails.push(trail) 
    });
});

router.get("/", (request, response) => {
    response.json({allTrails})
})

router.get('/:id', (request, response) => {
  const found = allTrails.some(trail => trail.id === parseInt(request.params.id))

  if(found) {
      response.json(allTrails.filter(trail => trail.id === parseInt(request.params.id))) 
  } else {
      response.status(400).json({ message: `No trail with id of ${request.params.id}`})
  }
})

module.exports = allTrails
module.exports = router

