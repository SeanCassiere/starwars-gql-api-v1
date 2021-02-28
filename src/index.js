// Server Imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";

// GraphQL Imports
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

// Init Express and DOTENV
const app = express();
dotenv.config();

// Environment variables
const SERVER_ENVIRONMENT = process.env.SERVER_ENVIRONMENT || "development";
const SERVER_PORT = process.env.SERVER_PORT || 4000;

// Adding CORS
app.use(cors());

// Init Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	cors: true,
});
server.applyMiddleware({ app });

// Listen Server
app.listen(SERVER_PORT, () => {
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
