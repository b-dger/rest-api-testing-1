const courseServices = require("../services/courses");

class CourseController {
  async getCoursesBySubject(request) {
    const { subject } = request.params;
    const result = await courseServices.getCoursesBySubject(subject);
    return JSON.stringify(result);
  }

  async getGenEdCoursesByCategory(request) {
    const { category } = request.params;
    // Try both category and category_code for flexibility
    const code = request.params.category_code || category;
    const result = await courseServices.getCoursesByGenEdCategory(code);
    return JSON.stringify(result);
  }
}

module.exports = new CourseController();
