"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var status = process.env.NODE_ENV || "development";
exports.status = status;
var port = process.env.SERVER_PORT || 4040;
exports.port = port;
var sessionSecret = process.env.SESSION_SECRET || "joejob_secret";
exports.sessionSecret = sessionSecret;
//# sourceMappingURL=env.js.map