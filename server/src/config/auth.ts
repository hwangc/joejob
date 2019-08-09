import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import pgPromise from "pg-promise";
import { User } from "../model/user";

const configDB = {
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "joejob",
  port: parseInt(process.env.PGPORT || "5432", 10),
  user: process.env.PGUSER || "joejob"
};
const pgp = pgPromise();
const db = pgp(configDB);
const configAuth = async (auth: passport.PassportStatic) => {
  auth.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "passwd"
      },
      async (email, passwd, done) => {
        const user = await db.one(
          `SELECT * FROM jj_users WHERE email = $[email] and password = $[passwd]`,
          { email, passwd }
        );
        // console.log("::: user :::", user);
        // Get user info from model and compare it with the user input
        if (email !== user.email) {
          return done(null, false, { message: "Incorrect user email" });
        }

        if (passwd !== user.password) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      }
    )
  );
  auth.serializeUser((user: User, done) => {
    console.log("::: serialize :::");
    done(null, user.id);
  });
  auth.deserializeUser(async (id, done) => {
    console.log("::: deserialize :::");
    const user = await db.one(`SELECT * FROM jj_users WHERE id = $[id]`, {
      id
    });
    if (id === user.id) {
      done(null, user);
    } else {
      done(new Error("Failed deserialize the user"));
    }
  });
};

export default configAuth;
