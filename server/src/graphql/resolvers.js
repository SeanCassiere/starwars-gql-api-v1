import { AuthenticationError } from "apollo-server-express";
import axios from "axios";

const resolvers = {
	Query: {
		// Test Routes
		hello: () => "Hello world!",
		authenticationError: (parent, args, context) => {
			throw new AuthenticationError("must authenticate");
		},
		// Main Routes
	},
};

export { resolvers };
