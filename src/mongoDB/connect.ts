import mongoose from "mongoose";
import config from "../config/config";

const { mongo_config: env } = config;

const connect = () => {
	if (mongoose.connection.readyState == 0) {
		mongoose
			.connect(env.url)
			.then((res) => {
				console.log("Base de datos conectada");
			})
			.catch((e) => {
				console.log("Error al conectar la base", e);
			});
	}
};

export default connect;
