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

const resolveStarships = async (parent) => {
	const starships = parent.starships.map(async (url) => {
		const { data } = await axios.get(url);
		return data;
	});
	return Promise.all(starships);
};

const resolveResidents = async (parent) => {
	const residents = parent.residents.map(async (url) => {
		const { data } = await axios.get(url);
		return data;
	});
	return Promise.all(residents);
};

const resolvePilots = async (parent) => {
	const pilots = parent.pilots.map(async (url) => {
		const { data } = await axios.get(url);
		return data;
	});
	return Promise.all(pilots);
};

// Primary Resolver
const resolvers = {
	Starship: {
		films: resolveFilms,
		pilots: resolvePilots,
	},
	Planet: {
		films: resolveFilms,
		residents: resolveResidents,
	},
	Person: {
		films: resolveFilms,
		homeworld: async (parent) => {
			const { data } = await axios.get(parent.homeworld);
			return data;
		},
		starships: resolveStarships,
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
		getStarship: async (_, { id }) => {
			const { data } = await axios.get(`${BASE_URL}/starships/${id}/`);
			return data;
		},
		getPlanet: async (_, { id }) => {
			const { data } = await axios.get(`${BASE_URL}/planets/${id}/`);
			return data;
		},
	},
};

export { resolvers };
