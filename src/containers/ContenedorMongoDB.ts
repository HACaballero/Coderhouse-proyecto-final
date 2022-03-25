import connect from "../mongoDB/connect";

class ContenedorMongoDB {
	entity: any;

	constructor(model: any) {
		connect();
		this.entity = model;
	}

	async save(item: any) {
		try {
			const newItem = new this.entity(item);
			return await newItem.save();
		} catch (e) {
			console.log(`Error al guardar el elemento: ${e}`);
		}
	}
	async getById(id: any) {
		try {
			return await this.entity.find({ id });
		} catch (e) {
			console.log(`Error al obtener los datos: ${e}`);
		}
	}
	async getAll() {
		try {
			return await this.entity.find({});
		} catch (e) {
			console.log(`Error al obtener los datos: ${e}`);
		}
	}
	async deleteById(id: any) {
		try {
			await this.entity.deleteOne({ id });
		} catch (e) {
			console.log(`Error al borrar el dato: ${e}`);
		}
	}
	async update(id: number, body: any) {
		try {
			return await this.entity.updateOne({ id }, { $set: body });
		} catch (e) {
			console.log(`Error al actualizar el item : ${e}`);
		}
	}
}

export default ContenedorMongoDB;
