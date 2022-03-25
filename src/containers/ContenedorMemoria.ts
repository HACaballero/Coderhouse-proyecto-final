class ContenedorMemoria {
	items: any[] = [];
	constructor() {}

	async save(item: any) {
		try {
			item.id = this.items.length + 1;
			item.created_at = Date.now();
			this.items.push(item);
			return this.items;
		} catch (e) {
			console.log(`Error al guardar el elemento: ${e}`);
		}
	}
	async getById(id: number) {
		try {
			let filter = this.items.filter((i) => i.id == id);
			return filter[0];
		} catch (e) {
			console.log(`Error al obtener el elemento : ${e}`);
		}
	}
	async getAll() {
		try {
			return this.items;
		} catch (e) {
			console.log(`Error al obtener los datos : ${e}`);
		}
	}
	async deleteById(id: number) {
		try {
			let filter = this.items.filter((i) => i.id != id);
			this.items = filter;
		} catch (e) {
			console.log(`Error al borrar el elemento : ${e}`);
		}
	}
	async update(id: number, body: any) {
		try {
			let index = this.items.findIndex((x) => x.id == id);
			if (index != -1) {
				this.items[index] = body;
				return this.items[index];
			} else {
				return {};
			}
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
		}
	}
}
export default ContenedorMemoria;
