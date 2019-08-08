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
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
var app_1 = __importDefault(require("./config/app"));
var auth_1 = __importDefault(require("./config/auth"));
var configEnv = __importStar(require("./config/env"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var auth = passport_1.default;
// Config App
app_1.default(app);
// Config auth
auth_1.default(auth);
// Config routes
routes_1.default(app);
app.listen(configEnv.port, function () {
    console.log("Server status: " + configEnv.status + " & running on port: " + configEnv.port);
});
//# sourceMappingURL=index.js.map