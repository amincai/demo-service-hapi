const Hapi = require("hapi");
const Joi = require("joi");

const server = new Hapi.Server({  
    host: 'localhost',
    port: 3000
  });

//server.connection({ "host": "localhost", "port": 3000 });

// server.route({
//     method: "GET",
//     path: "/",
//     handler: (request, response) => {
//         response("Hello World");
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
    if(error) {
        throw error;
    }
    console.log("Listening at " + server.info.uri);
});
