import * as HTTP from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';

import { schema } from './src/schemas';

// Initializing the servers
const app = express();
const http = HTTP.createServer(app);
const apollo = new ApolloServer({ schema }); // standard route: /graphql

// Setting up some custom env variables
require('dotenv').config({path: __dirname + '/.env'});

// Configure the express app
app.use(cors());

// Add the Apollo middleware to the express app
apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(http);

// Starting!
http.listen({ port: 5555 }, () => {
  console.log(`🚀 Server ready`);
});
