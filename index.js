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

  let routes = [];
  const routesPath = path.join(__dirname, 'routes');

  fs.readdirSync(routesPath)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const filePath = path.join(routesPath, file);
      const routeModule = require(filePath);
      if (Array.isArray(routeModule)) {
        routes.push(...routeModule);
      } else {
        console.warn(`Warning: ${file} does not export an array`);
      }
    });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
