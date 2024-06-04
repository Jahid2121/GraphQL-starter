/*
 * how to get the single data from an array 
 * 1. define the type with any query in, here query is id 
 * type Query {
 * author(id: ID!): Author
 * }
 * 2. but before that make sure the author schema is defined 
 *     type Author {
        id: ID! 
        name: String!
        verified: Boolean!
    }
    
 *  now take the whole author array and find that which match the passed argument 
          author(_, args) {
        return db.authors.find(author => author.id === args.id)
      }
 * 
 * 
 * 
 * 
 */
