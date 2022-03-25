import CarritosDao from "../../dao/carritos/CarritosDao";

class CarritoService {
	Carrito = new CarritosDao();
	constructor() {}

	getAll() {
		return this.Carrito.getAll();
	}
	save(item: any) {
		return this.Carrito.save(item);
	}

	getById(id: number): any {
		return this.Carrito.getById(id);
	}
	deleteById(id: number) {
		return this.Carrito.deleteById(id);
	}
	update(id: number, body: any) {
		return this.Carrito.update(id, body);
	}
}
export default CarritoService;
