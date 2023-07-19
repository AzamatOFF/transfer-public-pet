function isAuth(req, res, next) {
  if (req.session?.user?.id) {
    return next();
  }
  res.redirect('/');
}

module.exports = isAuth;
