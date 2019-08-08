"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var connect_flash_1 = __importDefault(require("connect-flash"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var passport_1 = __importDefault(require("passport"));
var path_1 = __importDefault(require("path"));
var configEnv = __importStar(require("./env"));
var configApp = function (app) {
    // public static path
    app.use(express_1.default.static(path_1.default.join(__dirname, "../../dist/public/views")));
    // config express to parse incoming JSON data
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(connect_flash_1.default());
    // config cookieParser
    app.use(cookie_parser_1.default());
    app.use(express_session_1.default({
        secret: configEnv.sessionSecret,
        resave: false,
        cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 },
        saveUninitialized: true
    }));
    // config passport
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
};
exports.default = configApp;
//# sourceMappingURL=app.js.map