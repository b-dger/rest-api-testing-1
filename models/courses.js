const fs = require("fs").promises;
const path = require("path");

class Courses {
  async find(criteria = () => true) {
    const coursesPath = path.join(__dirname, "courses.json");
    const data = await fs.readFile(coursesPath, "utf-8");
    const courses = JSON.parse(data);
    return courses.filter(criteria);
  }
}

module.exports = new Courses();
