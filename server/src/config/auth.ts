import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../model/user";

const configAuth = async (auth: passport.PassportStatic) => {
  auth.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "passwd"
      },
      async (email, passwd, done) => {
        try {
          const user = await User.getByEmailPasswd(email, passwd);
          // console.log("::: login user :::", user.email,email);
          
          // Get user info from model and compare it with the user input
          if (email !== user.email) {
            return done(null, false, { message: "Incorrect user email" });
          }

          if (passwd !== user.password) {
            return done(null, false, { message: "Incorrect password" });
          }

          return done(null, user);
        } catch (error) {
          console.log("::: Auth promise error ", error);
          return done(null, false, { message: "Who are you?" })
        }
      }
    )
  );
  auth.serializeUser((user: any, done) => {
    console.log("::: serialize :::");
    done(null, user.id);
  });
  auth.deserializeUser(async (id, done) => {
    console.log("::: deserialize :::");
    const user = await User.getById(id);
    if (id === user.id) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
};

export default configAuth;
