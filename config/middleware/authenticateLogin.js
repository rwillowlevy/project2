//only routes user to members page if they login successfully
module.exports = function (req, res, next) {
  //for successful login
  if (req.user) {
    return next();
  }

  //for failed login
  return res.redirect("/");
};