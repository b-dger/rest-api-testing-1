'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const path = require('path');
const fs = require('fs');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // Dynamic route loading
  let routes = [];
  const routesPath = path.join(__dirname, 'routes'); // full path to /routes folder

  fs.readdirSync(routesPath).forEach((file) => {
    const filePath = path.join(routesPath, file);
    const routeModule = require(filePath); // each file exports an array
    routes.push(...routeModule); // spread syntax adds all routes
  });

  // Register all routes
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
