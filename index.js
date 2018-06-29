const Hapi = require("hapi");
const Joi = require("joi");
let mongoose = require('mongoose');
let RestHapi = require('rest-hapi');
 

/*
const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

// let config = {
//               appTitle: "demo-service-hapi using rest-hapi",
//           };

// server.register({
//     plugin: RestHapi,
//     options: {
//         mongoose,
//         config
//     }
// });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

server.start(error => {
    if (error) {
        throw error;
    }
    console.log("Listening at " + server.info.uri);
});
*/

async function api(){
    try {
      let server = Hapi.Server({ port: 3000 });

      let config = {
          appTitle: "demo-service-rest-hapi",
          version: '1.0.0',
          authStrategy: false ,
      };
     /**
     * Mongo settings
     * - config.mongo.URI = 'mongodb://localhost/rest_hapi'; (local db, default)
     */
    //config.mongo.URI = 'mongodb://localhost/rest_hapi'
 
     config.embedAssociations = false;

      await server.register({
        plugin: RestHapi,
        options: {
          mongoose,
          config
        }
      });

      await server.start();

      console.log("Server ready", server.info);

      return server;
    } catch (err) {
      console.log("Error starting server:", err);
    }
  }

  module.exports = api();