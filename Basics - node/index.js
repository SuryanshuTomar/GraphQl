import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db.js";

// graphql types
import { typeDefs } from "./schema.js";

// Resolver functions -
const resolvers = {
	Query: {
		reviews: function () {
			return db.reviews;
		},
		review: function (_parent, args, _context) {
			return db.reviews.find((reviewItem) => reviewItem.id === args.id);
		},
		games: function () {
			return db.games;
		},
		game: function (_parent, args, _context) {
			return db.games.find((gameItem) => gameItem.id === args.id);
		},
		authors: function () {
			return db.authors;
		},
		author: function (_parent, args, _context) {
			return db.authors.find((authorItem) => authorItem.id === args.id);
		},
	},
};

// Apollo server takes an object which takes two arguments
// 1. Typedefs -> These are definition of different datatypes we wanna expose in our graph.
// 2. resolvers -> resolvers functions that determines how we respond to different queries on data on the graph.

// Server Setup -
const server = new ApolloServer({
	// Typedefs
	typeDefs,

	// Resolvers
	resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log("Server listening at port : ", 4000);
