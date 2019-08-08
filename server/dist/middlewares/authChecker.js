"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAuthenticated = function (req, res, next, redirect) {
    if (req.isAuthenticated()) {
        console.log("::: authenticated :::");
        return next();
    }
    console.log("::: not authenticated & redirect :::");
    if (redirect) {
        res.redirect(redirect);
    }
    else {
        res.redirect("/");
    }
};
exports.isAuthenticated = isAuthenticated;
var isNotAuthenticated = function (req, res, next, redirect) {
    if (req.isAuthenticated()) {
        console.log("::: authenticated & redirect :::");
        if (redirect) {
            res.redirect(redirect);
        }
        else {
            res.redirect("/");
        }
    }
    else {
        console.log("::: not authenticated :::");
        return next();
    }
};
exports.isNotAuthenticated = isNotAuthenticated;
//# sourceMappingURL=authChecker.js.map