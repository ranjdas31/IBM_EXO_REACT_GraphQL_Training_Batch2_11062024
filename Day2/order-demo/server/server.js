import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolversOrder } from "./resolvers-order.js";
import { readFile } from "node:fs/promises";
import {expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { read } from "node:fs";


/* 
const typeDefs = `#graphql
type Query{
    greeting: String
}
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello World',
    },
}; */

const PORT = 9000;

//const typeDefsOrderInfo = await readFile('./schema-order.graphq','utf-8');
const typeDefsOrderInfo = await readFile('C:/Users/072742744/Documents/Discover/Personal_Doc/Family/Ranjan/Training/React/IBM_Training/Projects/order-demo/server/schema-order.graphql','utf-8');

//const typeDefsOrderInfo = await readFile('C:\\Users\\072742744\\Documents\\Discover\\Personal_Doc\\Family\\Ranjan\\Training\\React\\IBM_Training\\Projects\\order-demo\\server\\schema-order.graphql','utf-8');




const apolloServer = new ApolloServer({typeDefsOrderInfo,resolversOrder});

//const server = new ApolloServer({typeDefs,resolvers});
const { url } = await startStandaloneServer(apolloServer, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);

//await apolloServer.start();
//app.use('/graphql',apolloMiddleware(apolloServer));

//app.listen({ port: PORT }, () => {
//  console.log(`Server running on port ${PORT}`);
//});















//const server = new ApolloServer({ typeDefsOrderInfo, resolversOrder });
//const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
//console.log(`Server running at ${url}`);


  /* const apolloserver = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: [ typeDefsOrderInfo],
      resolvers: [resolversOrder],
    }),
  });

  async function getContext({ req }) {
    if (req.auth) {
      const user = await getUser(req.auth.sub);
      return { user };
    }
  }

  const PORT = 9000; 
  const app = express();
  app.use(cors(), express.json(), authMiddleware);
  await apolloserver.start();

  app.use("/graphql", expressMiddleware(apolloserver, { context: getContext }));
  app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQl Server running on port ${PORT}`);
  }); */
  







