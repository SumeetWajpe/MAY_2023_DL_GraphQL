import { PubSub } from "graphql-subscriptions"; // practical use case is - RabbitMQ , redis, kafka
import { Message } from "./db.js";

const pubSub = new PubSub();

function rejectIf(condition) {
  if (condition) {
    throw new Error("Unauthorized");
  }
}

export const resolvers = {
  Query: {
    messages: (_root, _args, { userId }) => {
      console.log(userId);
      return Message.findAll();
    },
  },

  Mutation: {
    addMessage: async (_root, { input }, { userId }) => {
      rejectIf(!userId);
      const message = await Message.create({ from: userId, text: input.text });
      pubSub.publish("MESSAGE_ADDED", { messageAdded: message }); // broadcast / emit
      return message;
    },
  },

  Subscription: {
    messageAdded: {
      subscribe: (_root, _args) => {
        return pubSub.asyncIterator("MESSAGE_ADDED"); // [message]
      },
    },
  },
};
