
exports.search = function(req, res){
  var place=req.param("name");
  console.log("NAME: "+name);
	res.send({status: "hello from server"});
};