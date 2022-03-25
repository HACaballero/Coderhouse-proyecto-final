import { producto } from "../../interfaces/producto.interface";
import ProductoService from "./producto.service";

class ProductoController {
	productoService: ProductoService;
	constructor() {
		this.productoService = new ProductoService();
	}
	async save(item: producto) {
		try {
			return this.productoService.save(item);
		} catch (e) {
			console.log(`Error al guardar el producto : ${e}`);
			return {};
		}
	}
	async getById(id: number) {
		try {
			return this.productoService.getById(id);
		} catch (e) {
			console.log(`Error al obtener el producto : ${e}`);
			return {};
		}
	}

	async getAll() {
		try {
			return this.productoService.getAll();
		} catch (e) {
			console.log(`Error al obtener los productos : ${e}`);
			return {};
		}
	}
	deleteById(id: number) {
		try {
			return this.productoService.deleteById(id);
		} catch (e) {
			console.log(`Error al eliminar el producto : ${e}`);
			return {};
		}
	}
	update(id: number, body: producto) {
		try {
			return this.productoService.update(id, body);
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
			return {};
		}
	}
}

export default ProductoController;
