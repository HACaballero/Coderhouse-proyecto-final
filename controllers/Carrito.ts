import { producto } from "../interfaces/producto.interface";
import { carrito } from "../interfaces/carrito.interface";

class Carrito {
	nameFile: string;
	carritos: carrito[];
	constructor(nameFile: string) {
		this.nameFile = nameFile;
		this.carritos = [
			{
				id: 1,
				timestamp: 20200120,
				productos: [
					{
						nombre: "Escuadra",
						precio: 123,
						descripcion: "Soy una escuadra",
						stock: 1,
						id: 1,
						timestamp: 20200120,
						codigo: "Es-cod",
						foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
					},
				],
			},
		];
	}
	async newCarrito() {
		try {
			let newId = this.carritos.length + 1;

			this.carritos.push({ id: newId, timestamp: Date.now(), productos: [] });
			return newId;
		} catch (e) {
			console.log(`Error al crear el carrito: ${e}`);
		}
	}
	async getProductos(id: number) {
		try {
			let filter = this.carritos.filter((i) => i.id == id);
			return filter[0].productos;
		} catch (e) {
			console.log(`Error al obtener el elemento : ${e}`);
		}
	}

	async addProducto(id: number, producto: producto) {
		try {
			let index = this.carritos.findIndex((x) => x.id == id);
			if (index != -1) {
				this.carritos[index].productos.push(producto);
			} else {
				return {};
			}
		} catch (e) {
			console.log(`Error al obtener el elemento : ${e}`);
		}
	}
	async getAll() {
		try {
			return this.carritos;
		} catch (e) {
			console.log(`Error al obtener los datos : ${e}`);
		}
	}
	async deleteById(id: number) {
		try {
			let filter = this.carritos.filter((i) => i.id != id);
			this.carritos = filter;
		} catch (e) {
			console.log(`Error al borrar el elemento : ${e}`);
		}
	}

	async deleteProduct(id_carrito: number, id_producto: number) {
		try {
			let carritoIndex = this.carritos.findIndex((i) => i.id == id_carrito);
			let productos = this.carritos[carritoIndex].productos;
			let filter = productos.filter((i) => i.id != id_producto);
			this.carritos[carritoIndex].productos = filter;
		} catch (e) {
			console.log(`Error al borrar el elemento : ${e}`);
		}
	}
	async update(id: number, body: producto) {
		try {
			let index = this.carritos.findIndex((x) => x.id == id);
			if (index != -1) {
				let item = this.carritos[index];

				this.carritos[index] = item;
				return item;
			} else {
				return {};
			}
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
		}
	}
}

export default Carrito;
