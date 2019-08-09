"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var fakeUser = {
    id: 1,
    email: "joejob@joejob.com",
    password: "joejob",
    username: "joe",
    age: 25,
    height: 165,
    weight: 55,
    mobile_number: "",
    profile_photo: "",
    registered_dt: "",
    modified_dt: ""
};
exports.default = fakeUser;
//# sourceMappingURL=user.js.map