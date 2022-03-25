import getContainer from "..";

const { container, constructor } = getContainer("Carrito");

class CarritosDao extends container {
	constructor() {
		super(constructor);
	}
}

export default CarritosDao;
