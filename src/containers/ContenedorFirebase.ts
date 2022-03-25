import admin from "../config/firebase";

class ContenedorFirebase {
	db: any;
	query: any;
	constructor(entity: string) {
		this.db = admin.firestore();
		this.query = this.db.collection(entity);
	}

	async save(item: any) {
		try {
			let doc = this.query.doc();
			return await doc.create(item);
		} catch (e) {
			console.log(`Error al guardar el elemento: ${e}`);
		}
	}
	async getById(id: any) {
		try {
			const doc = this.query.doc(`${id}`);
			const item = await doc.get();
			return [item.data()];
		} catch (e) {
			console.log(`Error al obtener los datos: ${e}`);
		}
	}
	async getAll() {
		try {
			const doc = await this.query.get();
			const items = await doc.docs;
			const response = items.map((doc: any) => {
				return doc.data();
			});
			return response;
		} catch (e) {
			console.log(`Error al obtener los datos: ${e}`);
		}
	}
	async deleteById(id: any) {
		try {
			const doc = this.query.doc(`${id}`);
			const item = await doc.delete();
			return item;
		} catch (e) {
			console.log(`Error al borrar el dato: ${e}`);
		}
	}
	async update(id: number, body: any) {
		try {
			const doc = this.query.doc(`${id}`);
			const item = await doc.update(body);
			return item;
		} catch (e) {
			console.log(`Error al actualizar el item : ${e}`);
		}
	}
}

export default ContenedorFirebase;
