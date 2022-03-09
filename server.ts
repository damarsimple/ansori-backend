import { makeSchema } from 'nexus'

import { join } from 'path'
import { ApolloServer } from 'apollo-server'
import * as types from "./src/server/graphql"
import { paljs } from '@paljs/nexus';
import { context } from './src/modules/context';

export const schema = makeSchema({
  types,

  outputs: {

    typegen: join(__dirname, 'nexus-typegen.ts'),

    schema: join(__dirname, 'schema.graphql'),

  },

  plugins: [paljs({
    excludeFields: ['password'],
  })],
  contextType: {

    module: join(__dirname, "src/modules/context.ts"),

    export: "Context",

  },
})


export const server = new ApolloServer({
  schema, context: async ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    return context

    if (!token) return context;

    // Try to retrieve a user with the token
    // const user = (await parseToken<User>(token))

    // return {
    //   user,
    //   isLogged: !!user,
    //   isAdmin: user?.isAdmin || false,
    //   gotKey: req.headers.authorization == SECRET_KEY,
    //   ...context,
    // };
  },
})

server.listen().then(({ url }) => {

  console.log(`🚀 Server ready at ${url}`)

})