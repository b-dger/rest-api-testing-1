const Joi = require('@hapi/joi');
const coursesController = require('../controllers/courses');

module.exports = [
  {
  method: 'GET',
  path: '/gened/category/{category}',
  handler: async (request) => await coursesController.getGenEdCoursesByCategory(request)
},
{
  method: 'GET',
  path: '/gened/code/{category_code}',
  handler: async (request) => await coursesController.getGenEdCoursesByCategory(request)
}

];
