"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
const { mongo_config: env } = config_1.default;
const connect = () => {
    if (mongoose_1.default.connection.readyState == 0) {
        mongoose_1.default
            .connect(env.url)
            .then((res) => {
            console.log("Base de datos conectada");
        })
            .catch((e) => {
            console.log("Error al conectar la base", e);
        });
    }
};
exports.default = connect;
