export const typeDefs = `#graphql
        type Query{
            courses:[Course]
        }

        type Course{
            id:ID
            title:String
            price:Int
        }
`;
