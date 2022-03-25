"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContenedorMemoria_1 = __importDefault(require("../containers/ContenedorMemoria"));
const ContenedorFile_1 = __importDefault(require("../containers/ContenedorFile"));
const ContenedorMongoDB_1 = __importDefault(require("../containers/ContenedorMongoDB"));
const ContenedorFirebase_1 = __importDefault(require("../containers/ContenedorFirebase"));
const Producto_schema_1 = __importDefault(require("../mongoDB/models/Producto.schema"));
const Carrito_schema_1 = __importDefault(require("../mongoDB/models/Carrito.schema"));
const config_1 = __importDefault(require("../config/config"));
const { config: env } = config_1.default;
const getContainer = (cat) => {
    let container = ContenedorMemoria_1.default;
    let constructor = "";
    if (env.container_type == "FILE") {
        container = ContenedorFile_1.default;
        constructor = cat == "Producto" ? "data/Producto.txt" : "data/Carrito.txt";
    }
    else if (env.container_type == "MONGO_DB") {
        container = ContenedorMongoDB_1.default;
        constructor = cat == "Producto" ? Producto_schema_1.default : Carrito_schema_1.default;
    }
    else if (env.container_type == "FIREBASE") {
        container = ContenedorFirebase_1.default;
        constructor = cat == "Producto" ? "productos" : "carritos";
    }
    else {
        container = ContenedorMemoria_1.default;
    }
    return {
        container,
        constructor,
    };
};
exports.default = getContainer;
