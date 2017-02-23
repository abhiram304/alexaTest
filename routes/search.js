
exports.search = function(req, res){
  var place=req.param("name");
  console.log("NAME: "+place);
	res.send({status: "hello from server"});
};