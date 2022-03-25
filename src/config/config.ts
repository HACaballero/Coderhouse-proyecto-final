import * as dotenv from "dotenv";

const config = {
	port: process.env.PORT || 3000,
	admin: process.env.ADMIN || true,
	container_type: process.env.CONTAINER_TYPE || "MONGO_DB",
};

const mongo_config = {
	url: process.env.MONGO_DB_URL || "mongodb://localhost:27017/ecommerce",
	db_name: process.env.DB_NAME || "ecommerce",
};

export default {
	config,
	mongo_config,
};
