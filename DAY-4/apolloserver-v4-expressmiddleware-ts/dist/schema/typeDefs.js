export const typeDefs = `#graphql
    type Query{
        courses:[Course]
        # course(id:ID!):Course
        # trainers:[Trainer]
        # trainer(id:ID!):Trainer
    }

     type Course{
        id:ID!
        title:String!
        price:Int
        likes:Int
        rating:Int
        imageUrl:String
        trainer:Trainer
    }
    type Trainer{
        id:ID!
        name:String!
        isMCT:Boolean
        followers:Int
        avatarUrl:String
    }

`;
