var mongoose = require('mongoose');
var { ApolloServer, gql } = require('apollo-server');
mongoose.Promise = global.Promise;

const { Todoitem } = require('./model.js');

const typeDefs = gql`
    type Todoitem {
        _id: ID
        text: String
        isComplete: String
    }
    type Query {
        getTodoitems: [Todoitem]
        getTodoitem (_id: String): Todoitem
    }
    type Mutation {
        add(text: String!, isComplete: Boolean): Todoitem
        delete(_id: String): Todoitem
        updateText(_id: String, text:String): Todoitem
        updateCompletion(_id: String, isComplete:Boolean): Todoitem
    }
`;

//deleteTodoitem(id: String!): Todoitem

const resolvers = {

    Query: {
        getTodoitems: async () => await Todoitem.find({}).exec(),
        getTodoitem: async (_,args) => await Todoitem.findOne({_id:args._id}).exec()
    },
    Mutation: {
        add: async (_, args) => {
            try {
                let response = await Todoitem.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        }
        ,
        delete: async (_, args) => {
            console.log('DEADBEEF!!!!!!!!!!!!!')
            try {
                let response = await Todoitem.deleteOne({_id: args._id});
                console.log(response);
                return response;
            } catch(e) {
                console.log(e);

                return e.message;
            }
        },
        updateText: async (_,args) => {
            try {
                console.log(args);
                let response = await Todoitem.updateOne({_id:args._id}, {text:args.text},{new:true});
                console.log(response);
                return response;
            } catch(e) {
                console.log(e);
                return e.message;
            }
        },
        updateCompletion: async (_,args) => {
            try {
                console.log(args);
                let response = await Todoitem.updateOne({_id:args._id}, {isComplete:args.isComplete},{new:true});
                console.log(response);
                return response;
            } catch(e) {
                console.log(e);
                return e.message;
            }
        }
    }
};

// check for local config
const isDocker = require('is-docker');
if (!isDocker()) {
  console.log('load config');
  require('dotenv').config();
}
var ca = Buffer.from(process.env.CERTIFICATE_BASE64, 'base64');
mongoDbOptions = {
    useNewUrlParser: true,
    ssl: true,
    sslValidate: true,
    sslCA: ca
};

const server = new ApolloServer({ typeDefs, resolvers,
  context: ({ req }) => {
     // get the user token from the headers
     const token = req.headers.authorization || '';

     // try to retrieve a user with the token
     // const user = getUser(token);

     // add the user to the context
     //return { user };
   }
});
server.listen({port: process.env.PORT}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

mongoose.connect(process.env.MONGODB_URL, mongoDbOptions)
    .then(res => console.log(res))
    .catch(function (reason) {
      console.log('Unable to connect to the mongodb instance. Error: ', reason);
    });
