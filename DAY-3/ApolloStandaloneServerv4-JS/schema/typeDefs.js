export const typeDefs = `#graphql
        type Query{
            courses:[Course]
            course(id:ID!):Course
        }

        type Course{
            id:ID
            title:String
            price:Int
            rating:Int
        }
`;
