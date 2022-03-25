import mongoose from "mongoose";
import Producto from "./Producto.schema";

let Schema = mongoose.Schema;

let carritoSchema = new Schema({
	id: {
		type: String,
	},
	title: {
		type: String,
		required: [true, "Título es necesario"],
	},
	productos: {
		type: Array,
	},
	created_at: {
		type: Date,
	},
});

const Carrito = mongoose.model("Carrito", carritoSchema);
export default Carrito;
