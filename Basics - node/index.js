import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Apollo server takes an object which takes two arguments
// 1. Typedefs -> These are definition of different datatypes we wanna expose in our graph.
// 2. resolvers -> resolvers functions that determines how we respond to different queries on data on the graph.

// Server Setup -
const server = new ApolloServer({
	// Typedefs
});

// Start the server
const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log("Server listening at port : ", 4000);
