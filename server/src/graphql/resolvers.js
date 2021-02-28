import axios from "axios";

const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};

export { resolvers };
