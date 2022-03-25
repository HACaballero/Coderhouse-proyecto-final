import { Router } from "express";
import CarritoController from "../Modules/Carrito/carrito.controller";
let carrito = new CarritoController();
const router: any = Router();

router.post("/", (req: any, res: any) => {
	carrito
		.save(req.body)
		.then((carrito) => {
			res.send(carrito);
		})
		.catch((error) => res.send({ error }));
});

router.delete("/:id", (req: any, res: any) => {
	carrito.deleteById(req.params.id);
	res.send({ status: "ok" });
});

router.get("/:id/productos", (req: any, res: any) => {
	carrito
		.getById(req.params.id)
		.then((carrito: any) => {
			res.send({ productos: carrito.productos || [] });
		})
		.catch((error) => res.send({ error }));
});

router.post("/:id/productos", (req: any, res: any) => {
	carrito.saveProduct(req.params.id, req.body.body);

	res.send({ status: "ok" });
});

router.use((req: any, res: any) => {
	res.send({
		error: -2,
		descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
	});
});

export const carritosRouter = router;
