"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_local_1 = require("passport-local");
var user_1 = __importDefault(require("../model/user"));
var configAuth = function (auth) {
    auth.use(new passport_local_1.Strategy({
        usernameField: "email",
        passwordField: "passwd"
    }, function (email, passwd, done) {
        // Get user info from model and compare it with the user input
        if (email !== user_1.default.email) {
            return done(null, false, { message: "Incorrect user email" });
        }
        if (passwd !== user_1.default.passwd) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user_1.default);
    }));
    auth.serializeUser(function (user, done) {
        console.log("::: serialize :::");
        done(null, user.id);
    });
    auth.deserializeUser(function (id, done) {
        console.log("::: deserialize :::");
        if (user_1.default.id === id) {
            done(null, user_1.default);
        }
        else {
            done(new Error("Failed deserialize the user"));
        }
    });
};
exports.default = configAuth;
//# sourceMappingURL=auth.js.map