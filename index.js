'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // GET route
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const name = request.query.name || "Guest";
      return `Hello, ${name}!`;
    }
  });

  // POST route
  server.route({
    method: 'POST',
    path: '/',
    handler: (request, h) => {
      console.log("Received body:", request.payload);
      return { message: "Data received", data: request.payload };
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
