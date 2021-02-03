const responseMessage ={
  message:"Hi",
  from:"from the external Server for the custom apps"
}
exports.sayhi = function(req, res) {


    res.json(responseMessage);

};
