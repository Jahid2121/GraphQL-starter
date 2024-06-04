import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


// db 
import db from "./_db.js"


// types 
import { typeDefs } from './schema.js';
 


// Resolvers define how to fetch the types defined in your schema.

const resolvers = {
    Query: {
      games() {
        return db.games
      },
      game(_, args) {  // '_' means 'parent', but I don't need it that's why here I use _ 
        return db.games.find(game => game.id === args.id)
      }
      ,
      authors() {
        return db.authors
      },
      author(_, args) {
        return db.authors.find(author => author.id === args.id)
      }
      ,
      reviews() {
        return db.reviews
      },
      review(_, args) {
        return db.reviews.find((review) => review.id === args.id)
      }
    },
    // related data
    // reviews related to that game
    Game: {
      reviews(parent) {
        return db.reviews.filter(r => r.game_id === parent.id)
      }
    },
    // reviews related to the author
    Author: {
      reviews(parent) {
        return db.reviews.filter(r => r.author_id === parent.id)
      }
    },
    // getting author and game related to that review
    // we use find instead of filter here is bcz, we are gonna have only one author and game realted to this review
    Review: {
      author(parent) {
        return db.authors.find(author => author.id === parent.author_id)
      },
      game(parent) {
        return db.games.find(g => g.id === parent.game_id)
      }
    }
  };



   

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);

