const coursesModel = require("../models/courses");
const genedModel = require("../models/gened");

class CourseServices {
  async getCoursesBySubject(subject) {
    // Return all courses where subject matches
    return await coursesModel.find(c => c.subject === subject);
  }

  async getCoursesByGenEdCategory(category_code) {
    // Return all gened courses where category_code matches
    return await genedModel.find(g => g.category_code === category_code);
  }
}

module.exports = new CourseServices();
