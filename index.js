import { GraphQLServer } from "graphql-yoga";
import resolvers from "./hckinsta/resolvers"

const server = new GraphQLServer({
    typeDefs : 'hckinsta/schema.graphql',
    resolvers
})


server.start(() => console.log("Movieql server running"));