"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var passport_local_1 = require("passport-local");
var pg_promise_1 = __importDefault(require("pg-promise"));
var configDB = {
    host: process.env.PGHOST || "localhost",
    database: process.env.PGDATABASE || "joejob",
    port: parseInt(process.env.PGPORT || "5432", 10),
    user: process.env.PGUSER || "joejob"
};
var pgp = pg_promise_1.default();
var db = pgp(configDB);
var configAuth = function (auth) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        auth.use(new passport_local_1.Strategy({
            usernameField: "email",
            passwordField: "passwd"
        }, function (email, passwd, done) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db.one("SELECT * FROM jj_users WHERE email = $[email] and password = $[passwd]", { email: email, passwd: passwd })];
                    case 1:
                        user = _a.sent();
                        // console.log("::: user :::", user);
                        // Get user info from model and compare it with the user input
                        if (email !== user.email) {
                            return [2 /*return*/, done(null, false, { message: "Incorrect user email" })];
                        }
                        if (passwd !== user.password) {
                            return [2 /*return*/, done(null, false, { message: "Incorrect password" })];
                        }
                        return [2 /*return*/, done(null, user)];
                }
            });
        }); }));
        auth.serializeUser(function (user, done) {
            console.log("::: serialize :::");
            done(null, user.id);
        });
        auth.deserializeUser(function (id, done) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("::: deserialize :::");
                        return [4 /*yield*/, db.one("SELECT * FROM jj_users WHERE id = $[id]", {
                                id: id
                            })];
                    case 1:
                        user = _a.sent();
                        if (id === user.id) {
                            done(null, user);
                        }
                        else {
                            done(new Error("Failed deserialize the user"));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.default = configAuth;
//# sourceMappingURL=auth.js.map