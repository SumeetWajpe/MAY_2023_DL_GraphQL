import { buildSubgraphSchema } from "@apollo/subgraph";
import Debug from "debug";
import { typeDefs } from "./schema.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
const debug = Debug("product");
const products = [
    {
        id: "1",
        title: "Blender",
        description: null,
        price: 40,
        categoryId: "2",
    },
];
const categories = [
    {
        id: "2",
        title: "Kitchen tools",
    },
];
const resolvers = {
    Query: {
        product: (_, { id }) => {
            debug(`resolving product by id '${id}'`);
            return products.find(product => product.id === id);
        },
    },
    Product: {
        category(product) {
            debug(`resolving product category for product '${JSON.stringify(product)}'`);
            return categories.find(category => category.id === product.categoryId);
        },
    },
};
// npm install @apollo/server express graphql cors body-parser
// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);
// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
// Ensure we wait for our server to start
await server.start();
// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use("/", cors(), bodyParser.json(), 
// expressMiddleware accepts the same arguments:
// an Apollo Server instance and optional configuration options
expressMiddleware(server));
// Modified server startup
app.listen(4001, () => console.log(`🚀 GraphQL Server ready at http://localhost:4001/`));
