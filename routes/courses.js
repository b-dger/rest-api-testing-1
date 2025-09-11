const Joi = require('@hapi/joi');

module.exports = [
  {
    method: 'GET',
    path: '/courses/{subject}',
    handler: (request, h) => {
      return request.params.subject; // MAT, CSC, etc.
    }
  },
  {
    method: 'GET',
    path: '/courses/credits/{number}',
    handler: (request, h) => {
      return request.params.number; // 1, 2, 3, etc.
    }
  }
];
