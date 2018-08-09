const User = require("../models/user"),
      jwt = require("jwt-then");
      passport = require("passport");

module.exports = {

    loginUser: async (req, res, next) => passport.authenticate('local', async (err, user) => {
            if (err) {
              return res.status(500).send(err.message);
            }

            try {
              const token = await jwt.sign({ user }, "pimba");
              
              if (user) {
                return res.json({ token });
              }

              return res.status(401).send('Incorrect username or password.');
            } catch (error) {
              return res.status(500).send(error.message);
            }
    })(req, res, next),

    registerUser: async (req, res) => {
        try {
          const registeredUser = await User.register(new User({
            username: req.body.username,
          }), req.body.password);
          return res.status(200).send('Successfully registered');
        } catch (err) {
          return res.status(500).send(err.message);
        }
    },

    getUser: async (req, res) => {
        try {
          const foundUser = await User.findById(req.authData.user._id);
          const { username } = foundUser;
          return res.json({ username });
        } catch (err) {
          return res.status(500).send(err.message);
        }
    },

}
