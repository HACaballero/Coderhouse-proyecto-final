import ProductosDao from "../../dao/productos/ProductosDao";

class ProductoService {
	Producto = new ProductosDao();
	constructor() {}

	async getAll() {
		return this.Producto.getAll();
	}
	save(item: any) {
		return this.Producto.save(item);
	}
	getById(id: number) {
		return this.Producto.getById(id);
	}
	deleteById(id: number) {
		return this.Producto.deleteById(id);
	}
	update(id: number, body: any) {
		return this.Producto.update(id, body);
	}
}
export default ProductoService;
