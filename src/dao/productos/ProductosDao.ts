import getContainer from "..";

const { container, constructor } = getContainer("Producto");

class ProductosDao extends container {
	constructor() {
		super(constructor);
	}
}

export default ProductosDao;
