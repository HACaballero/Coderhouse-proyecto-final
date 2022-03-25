import { Router } from "express";
import ProductoController from "../Modules/Producto/producto.controller";
import config from "../config/config";

const { config: env } = config;
let producto = new ProductoController();
const router: any = Router();

router.get("/:id?", (req: any, res: any) => {
	if (req.params.id) {
		producto.getById(req.params.id).then((productos: any) => {
			if (productos.length > 0 && productos[0]) {
				res.send({ productos });
			} else {
				res.send({ error: "producto no encontrado" });
			}
		});
	} else {
		producto.getAll().then((productos) => {
			res.send({ productos });
		});
	}
});
router.post("/", (req: any, res: any) => {
	if (env.admin) {
		producto.save(req.body);
		res.send({ status: "ok" });
	} else {
		res.send({ error: "No tiene acceso" });
	}
});
router.put("/:id", (req: any, res: any) => {
	if (env.admin) {
		producto.update(req.params.id, req.body);
		res.send({ status: "ok" });
	} else {
		res.send({ error: "No tiene acceso" });
	}
});
router.delete("/:id", (req: any, res: any) => {
	if (env.admin) {
		producto.deleteById(req.params.id);
		res.send({ status: "ok" });
	} else {
		res.send({ error: "No tiene acceso" });
	}
});

router.use((req: any, res: any) => {
	res.send({
		error: -2,
		descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
	});
});

export const productosRouter = router;
