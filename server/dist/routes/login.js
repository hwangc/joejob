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
var path_1 = __importDefault(require("path"));
var authChecker = __importStar(require("../middlewares/authChecker"));
var router = express_1.default.Router();
router.use(function (req, res, next) {
    return authChecker.isNotAuthenticated(req, res, next, "/mypage");
});
router.get("/", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../../dist/public/views/login.html"));
});
router.post("/", passport_1.default.authenticate("local", {
    successRedirect: "mypage",
    failureRedirect: "login",
    failureFlash: true
}), function (req, res) {
    res.send("Welcome to Joejob");
});
exports.default = router;
//# sourceMappingURL=login.js.map