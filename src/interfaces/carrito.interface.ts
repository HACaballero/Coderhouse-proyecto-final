import { producto } from "./producto.interface";
export interface carrito {
	id?: number;
	timestamp: number;
	productos: producto[];
}
