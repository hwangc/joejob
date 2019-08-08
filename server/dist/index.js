"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config();
var status = process.env.NODE_ENV;
var app = express_1.default();
var port = process.env.SERVER_PORT || 4040;
app.use(express_1.default.static(path_1.default.join(__dirname, "../dist/views")));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../dist/views/index.html"));
});
app.listen(port, function () {
    console.log("status: " + status + ", server started at port: " + port);
});
//# sourceMappingURL=index.js.map