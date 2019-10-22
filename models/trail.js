// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);
// const request = require('request')

// const allTrails = []

// request('https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=1000&maxResults=500&key=200603620-a27f4d07df1f945df4e225ea302ec3c7', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }  
//     body.trails.forEach(trail => {
//       // trailId.push(trail.id)
//       allTrails.push(trail) 
//     });
//     // console.log(trailId)
// });

// module.exports = allTrails