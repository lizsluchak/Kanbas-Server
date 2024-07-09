import Database from "../Database/index.js"

/**
 * Now that we moved the Database to the server, we have to make it available 
 * to the React.js client application through a Web API 
 * (Application Programming Interface). 
 * The exercise below makes the courses available at 
 * http://localhost:4000/api/courses. 
 * 
 * @param {*} app 
 */
export default function CourseRoutes(app) {
  //get all courses
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });

  /**
   * Create New Course & Add to Database:
   * New course is passed in the HTTP body from the client is appeneded to
   * the end of the courses array in the Dashboard. Course is given new
   * unique identifier and sent back to client as response. 
   */
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });

}
