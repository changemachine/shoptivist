// NUTRITIONIX SCRATCH pad
// var nutritionix = require('node_modules/nutritionix')({
//     appId: 'c68d3861',
//     appKey: '14929775ea34cde004ad19b17e09b761'
// }, false);

// Rough guesstimate:
// import NutritionixClient from 'node_modules/nutritionix';
//
// var nutritionix = new NutritionixClient({
//     appId: 'c68d3861',
//     appKey: '14929775ea34cde004ad19b17e09b761'
//     // debug: true, // defaults to false
// });



// THE JQUERY WAY
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=' + params.zip;
//  return Ember.$.getJSON(url).then(function(responseJSON) {
//    var legislators = [];
//    responseJSON.results.forEach(function(legislator) {
//      legislators.push(legislator);
//    });
//  return legislators;

// THE NUTRITIONIX MODULE WAY
// naturalSearchSuccess(nRes){
//     console.log('executed natural search: %d hits'.green, nRes.results.length);
//
//     _.forEach(nRes.results, function(r){
//         var query = r.parsed_query.query;
//         var calories = _.find(r.nutrients, {attr_id: 208}) || {
//             attr_id: null,
//             value: null,
//             unit: null,
//             usda_tag: null
//         };
//         console.log(' - %s calories=%d'.green, query, calories.value);
//     });
//


companies:{
  burts-bees-company: {
    company-info: "address, score, yada",

    company-brands:{
      burts-bees: {
        overall: 7,
        health: {
          health-score: 6,
          factors: "Some toxic ingredients"
        }
        enviro: {
          enviro-score: 7,
          factors: "Some reasons were apparent."
        },
        community: {
          community-score: 7,
          factors: "Just because"
        },

        products: {
          178421: {
            name: "Burt's Bees Herbal Treatment Shampoo",
            category:
            health: {
              ingredients: 0,
              health-score: 0,
              impacts: 0,
              certifications: 0
            },
            environment: {
              resource-use: 0,
              environmental: 0,
              impact: 0,
              transparency: 0
            },
            social:{
              consumer: 0,
              worker: 0,
              safety: 0,
              community: 0,
            }
          }
        }
      }
    }
  }
}



ROUTES


/snacks/snack_id/
