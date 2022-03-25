import ContenedorMemoria from "../containers/ContenedorMemoria";
import ContenedorFile from "../containers/ContenedorFile";
import ContenedorMongoDB from "../containers/ContenedorMongoDB";
import ContenedorFirebase from "../containers/ContenedorFirebase";

import Producto from "../mongoDB/models/Producto.schema";
import Carrito from "../mongoDB/models/Carrito.schema";

import config from "../config/config";

const { config: env } = config;

const getContainer = (cat: string) => {
	let container: any = ContenedorMemoria;
	let constructor: any = "";
	if (env.container_type == "FILE") {
		container = ContenedorFile;
		constructor = cat == "Producto" ? "data/Producto.txt" : "data/Carrito.txt";
	} else if (env.container_type == "MONGO_DB") {
		container = ContenedorMongoDB;
		constructor = cat == "Producto" ? Producto : Carrito;
	} else if (env.container_type == "FIREBASE") {
		container = ContenedorFirebase;
		constructor = cat == "Producto" ? "productos" : "carritos";
	} else {
		container = ContenedorMemoria;
	}
	return {
		container,
		constructor,
	};
};

export default getContainer;
