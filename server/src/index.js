import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

const SERVER_ENVIRONMENT = process.env.SERVER_ENVIRONMENT || "development";
const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.use(cors());

app.listen(4000, () => {
	console.log(
		`Environment: ${SERVER_ENVIRONMENT}\n🚀 Server ready at http://localhost:${SERVER_PORT}`
	);
});

app.on("uncaughtException", () => {
	console.log("uncaughtException, killing server.");
});
app.on("SIGTERM", () => {
	console.log("SIGTERM, killing server.");
});
