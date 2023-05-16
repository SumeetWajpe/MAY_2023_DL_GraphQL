"use strict";
exports.__esModule = true;
var subgraph_1 = require("@apollo/subgraph");
var debug_1 = require("debug");
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var debug = (0, debug_1["default"])("review");
var reviews = [
    {
        id: "1",
        productId: "1",
        content: "The best blender",
        rating: 4.5
    },
];
var resolvers = {
    Product: {
        reviews: function (product) {
            debug("resolving product reviews by product ".concat(JSON.stringify(product)));
            return reviews.filter(function (review) { return review.productId === product.id; });
        }
    }
};
var server = new apollo_server_1.ApolloServer({
    schema: (0, subgraph_1.buildSubgraphSchema)({ typeDefs: schema_1.typeDefs, resolvers: resolvers })
});
server.listen({ port: 4002 }).then(function () {
    debug("service started");
});
