import { AuthenticationError } from "apollo-server-express";
import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

// Shareable Resolvers
const resolveFilms = async (parent) => {
	const films = parent.films.map(async (url) => {
		const { data } = await axios.get(url);
		return data;
	});
	return Promise.all(films);
};

// Primary Resolver
const resolvers = {
	Planet: {
		films: resolveFilms,
	},
	Person: {
		films: resolveFilms,
		homeworld: async (parent) => {
			const { data } = await axios.get(parent.homeworld);
			return data;
		},
	},
	Query: {
		// Test Routes
		hello: () => "Hello world!",
		authenticationError: () => {
			throw new AuthenticationError("must authenticate");
		},
		// Main Routes
		getPerson: async (_, { id }) => {
			const { data } = await axios.get(`${BASE_URL}/people/${id}/`);
			return data;
		},
	},
};

export { resolvers };
