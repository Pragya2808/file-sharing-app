const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const session = require("express-session");

const GooglePlusTokenStrategy = require("passport-google-plus-token");

passport.use(
  new GooglePlusTokenStrategy(
    {
      clientID:
        "561406907055-9kcsg54nq8ulum48evpug5br4qmk7bsq.apps.googleusercontent.com",
      clientSecret: "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",
      passReqToCallback: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log("Access token: " + accessToken);
        console.log("Refresh token: " + refreshToken);
        console.log("Profile: " + profile);

        User.findOrCreate({ "google.id": profile.id }, function (error, user) {
          return done(error, user);
        });
      } catch (err) {}
    }
  )
);

module.exports = passport;
