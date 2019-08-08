"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = __importDefault(require("./home"));
var login_1 = __importDefault(require("./login"));
var logout_1 = __importDefault(require("./logout"));
var mypage_1 = __importDefault(require("./mypage"));
var configRoutes = function (app) {
    app.use("/", home_1.default);
    app.use("/login", login_1.default);
    app.use("/mypage", mypage_1.default);
    app.use("/logout", logout_1.default);
};
exports.default = configRoutes;
//# sourceMappingURL=index.js.map