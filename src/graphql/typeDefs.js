import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello: String
		authenticationError: String

		getPerson(id: Int!): Person
		getStarship(id: Int!): Starship
		getPlanet(id: Int!): Planet
	}

	type Starship {
		name: String
		model: String
		manufacturer: String
		cost_in_credits: Int
		length: Int
		max_atmosphering_speed: Int
		crew: Int
		passengers: Int
		cargo_capacity: Int
		consumables: String
		hyperdrive_rating: Float
		MGLT: Int
		starship_class: String
		films: [Film]
		pilots: [Person]
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
		residents: [Person]
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
		starships: [Starship]
	}
`;

export { typeDefs };
