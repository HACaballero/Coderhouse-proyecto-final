import { carrito } from "../../interfaces/carrito.interface";
import { producto } from "../../interfaces/producto.interface";
import CarritoService from "./carrito.service";

class CarritoController {
	productos: any;
	carritoService: CarritoService;
	constructor() {
		this.carritoService = new CarritoService();
	}
	async save(item: carrito) {
		try {
			return this.carritoService.save(item);
		} catch (e) {
			console.log(`Error al guardar el producto : ${e}`);
			return {};
		}
	}
	async getById(id: number) {
		try {
			return this.carritoService.getById(id);
		} catch (e) {
			console.log(`Error al obtener el producto : ${e}`);
			return {};
		}
	}

	async getAll() {
		try {
			return this.carritoService.getAll();
		} catch (e) {
			console.log(`Error al obtener los productos : ${e}`);
			return {};
		}
	}
	deleteById(id: number) {
		try {
			return this.carritoService.deleteById(id);
		} catch (e) {
			console.log(`Error al eliminar el producto : ${e}`);
			return {};
		}
	}
	update(id: number, body: carrito) {
		try {
			return this.carritoService.update(id, body);
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
			return {};
		}
	}

	saveProduct(id: number, product: producto) {
		try {
			let carrito = this.carritoService.getById(id).then((carrito: any) => {
				if (carrito.productos) {
					carrito.productos.push(product);
				} else {
					carrito.productos = [product];
				}
				return this.carritoService.update(id, carrito);
			});
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
			return {};
		}
	}
}

export default CarritoController;
