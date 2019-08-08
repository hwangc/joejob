import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import fakeUser, { User } from "../model/user";

const configAuth = (auth: passport.PassportStatic) => {
  auth.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "passwd"
      },
      (email, passwd, done) => {
        // Get user info from model and compare it with the user input
        if (email !== fakeUser.email) {
          return done(null, false, { message: "Incorrect user email" });
        }

        if (passwd !== fakeUser.passwd) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, fakeUser);
      }
    )
  );
  auth.serializeUser((user: User, done) => {
    console.log("::: serialize :::");
    done(null, user.id);
  });
  auth.deserializeUser((id, done) => {
    console.log("::: deserialize :::");
    if (fakeUser.id === id) {
      done(null, fakeUser);
    } else {
      done(new Error("Failed deserialize the user"));
    }
  });
};

export default configAuth;
