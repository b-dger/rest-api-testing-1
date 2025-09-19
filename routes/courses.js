const Joi = require("joi");
const coursesController = require("../controllers/courses");

module.exports = [
  {
    method: "GET",
    path: "/courses/{subject}",
    options: {
      validate: {
        params: Joi.object({
          subject: Joi.string().required()
        })
      }
    },
  handler: async (request) => await coursesController.getCoursesBySubject(request)
  },
  {
    method: "GET",
    path: "/gened/{category_code}",
    options: {
      validate: {
        params: Joi.object({
          category_code: Joi.string().required()
        })
      }
    },
  handler: async (request) => await coursesController.getGenEdCoursesByCategory(request)
  }
];
