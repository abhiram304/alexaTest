var Yelp = require('yelp');
exports.search = function(req, res){
	
	var place=req.param("name");
	//var place=req.param("name");
	  console.log("NAME: "+place); 
	var yelp = new Yelp({
	  consumer_key: '7vLzDnZHyYvWg_cU2Py39Q',
	  consumer_secret: 'Npv_bLKHX7akdJ-blHfB53DholA',
	  token: 'DWT-7vLiyMkWeFkp2jqk8R3OMeTgGul5',
	  token_secret: 'tArD_HGYsluoOVQuJaWK131GjFs',
	});
	yelp.search({ term: 'tourism', location : place, radius_filter: '10000', limit: '5' })
	.then(function (data) {
		resData=data;
	  //console.log(JSON.stringify(data));
	  var jsonParse1=JSON.parse(JSON.stringify(data));
	  console.log("-------------------"+data.businesses[0].name);
	  //console.log(jsonParse1.businesses[1].name+"  "+jsonParse1.businesses[0].url+" "+jsonParse1.businesses[0].rating+" "+jsonParse1.businesses[0].image_url+" "+jsonParse1.businesses[0].rating_img_url_small);
	  res.send({status: "hello from server", "data":data.businesses[0].name});  
	  	  //res.render('Customer/searchResults',{obj: jsonParse1, "location":location});
	});
  
	
};