import mongoose from "mongoose";

let Schema = mongoose.Schema;

let productoSchema = new Schema({
	id: {
		type: String,
	},
	title: {
		type: String,
		required: [true, "Título es necesario"],
	},
	price: {
		type: Number,
		required: [true, "Precio es necesario"],
	},
	created_at: {
		type: Date,
	},
});

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;
