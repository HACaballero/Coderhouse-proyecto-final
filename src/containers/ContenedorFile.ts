const fs = require("fs");

class ContenedorFile {
	nameFile: string = "";
	constructor(nameFile: string) {
		this.nameFile = nameFile;
	}

	async save(item: any) {
		try {
			let items = await this.txtToJson();
			item.id = items.length + 1;
			item.created_at = Date.now();
			items.push(item);
			items = JSON.stringify(items);
			await fs.promises.writeFile(this.nameFile, items);
			return items;
		} catch (e) {
			console.log(`Error al guardar el elemento: ${e}`);
		}
	}
	async getById(id: any) {
		try {
			let contenido = await this.txtToJson();
			let filter = contenido.filter((i: any) => i.id == id);
			return filter;
		} catch (e) {
			console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
		}
	}
	async getAll() {
		try {
			let contenido = await this.txtToJson();
			return contenido;
		} catch (e) {
			console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
		}
	}
	async deleteById(id: any) {
		try {
			let contenido = await this.txtToJson();
			let filter = contenido.filter((i: any) => i.id != id);
			contenido = JSON.stringify(filter);
			await fs.promises.writeFile(this.nameFile, contenido);
		} catch (e) {
			console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
		}
	}
	async deleteAll() {
		try {
			await fs.promises.writeFile(this.nameFile, "[]");
		} catch (e) {
			console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
		}
	}
	async update(id: number, body: any) {
		try {
			let items = await this.txtToJson();
			let index = items.findIndex((x: any) => x.id == id);
			if (index != -1) {
				items[index] = body;
				await fs.promises.writeFile(this.nameFile, items);
				return items[index];
			} else {
				return {};
			}
		} catch (e) {
			console.log(`Error al actualizar el producto : ${e}`);
		}
	}

	async txtToJson() {
		let contenido = await fs.promises.readFile(this.nameFile, "utf-8");
		contenido = JSON.parse(contenido);
		return contenido;
	}
}


export default ContenedorFile;
