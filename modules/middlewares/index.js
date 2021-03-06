const jwt = require('jwt-then');

const User = require('../../models/user.js');
// to gain acess send Authorization header in the format Bearer <token>

module.exports = async (req, res, next) => {
  try {
    const bearerHeader = req.headers.authorization;

    if (bearerHeader) {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      const authData = await jwt.verify(bearerToken, "pimba");
      const foundUser = await User.findById(authData.user._id);
      req.authData = authData;
      if (foundUser) {
        return next();
      }
      return res.status(500).send('User not found');
    }
    return res.status(401).send('You need to be logged in to that');
  } catch (err) {
    return res.status(500).send(err.message);
  }
};