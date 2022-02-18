import { producto } from "../interfaces/producto.interface";

class Producto {
	nameFile: string;
	productos: producto[];
	constructor(nameFile: string) {
		this.nameFile = nameFile;
		this.productos = [
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
		];
	}
	async save(item: producto) {
		try {
			let newId = this.productos.length + 1;
			item.id = newId;
			item.timestamp = Date.now();
			console.log("PRODUCTOS 1",this.productos)
			this.productos.push(item);
			console.log("PRODUCTOS 2",this.productos)
			return this.productos;
		} catch (e) {
			console.log(`Error al guardar el producto: ${e}`);
		}
	}
	async getById(id: number) {
		try {
			let filter = this.productos.filter((i) => i.id == id);
			return filter;
		} catch (e) {
			console.log(`Error al obtener el elemento : ${e}`);
		}
	}
	async getAll() {
		try {
			console.log(this.productos);
			return this.productos;
		} catch (e) {
			console.log(`Error al obtener los datos : ${e}`);
		}
	}
	async deleteById(id: number) {
		try {
			let filter = this.productos.filter((i) => i.id != id);
			this.productos = filter;
		} catch (e) {
			console.log(`Error al borrar el elemento : ${e}`);
		}
	}
	async update(id: number, body: producto) {
		try {
			let index = this.productos.findIndex((x) => x.id == id);
			if (index != -1) {
				let item = this.productos[index];
				item.precio = body.precio;
				item.nombre = body.nombre;
				this.productos[index] = item;
				return item;
			} else {
				return {};
			}
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
		}
	}
}

export default Producto;
