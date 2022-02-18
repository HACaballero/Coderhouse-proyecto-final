import { Router } from "express";

import Carrito from "./controllers/Carrito";
let carrito = new Carrito("./carrito.txt");

const router: any = Router();

router.post("/", (req: any, res: any) => {
	carrito
		.newCarrito()
		.then((id) => {
			res.send({ id });
		})
		.catch((error) => res.send({ error }));
});

router.delete("/:id", (req: any, res: any) => {
	carrito
		.deleteById(req.params.id)
		.then(() => {
			res.send({ status: "ok" });
		})
		.catch((error) => res.send({ error }));
});

router.get("/:id/productos", (req: any, res: any) => {
	carrito
		.getProductos(req.params.id)
		.then((productos: any) => {
			res.send({ productos });
		})
		.catch((error) => res.send({ error }));
});

router.post("/:id/productos", (req: any, res: any) => {
	carrito
		.addProducto(req.params.id, req.body)
		.then(() => {
			res.send({ status: "ok" });
		})
		.catch((error) => res.send({ error }));
});

router.delete("/:id/productos/:id_prod", (req: any, res: any) => {
	carrito
		.deleteProduct(req.params.id, req.params.id_prod)
		.then(() => {
			res.send({ status: "ok" });
		})
		.catch((error) => res.send({ error }));
});

router.use((req: any, res: any) => {
	res.send({
		error: -2,
		descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
	});
});

export const carritosRouter = router;
