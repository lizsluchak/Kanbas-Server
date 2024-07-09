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
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
}
