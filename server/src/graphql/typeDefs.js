import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello: String
		authenticationError: String

		getPerson(id: Int!): Person
	}

	type Film {
		title: String
		episode_id: Int
		opening_crawl: String
		director: String
		producer: String
		release_date: String
	}

	type Planet {
		name: String
		rotation_period: Int
		orbital_period: Int
		diameter: Int
		climate: String
		gravity: String
		terrain: String
		surface_water: Int
		population: Int
		films: [Film]
	}

	type Person {
		name: String
		height: String
		mass: String
		hair_color: String
		skin_color: String
		eye_color: String
		birth_year: String
		gender: String
		films: [Film]
		homeworld: Planet
	}
`;

export { typeDefs };
