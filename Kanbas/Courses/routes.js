import * as dao from "./dao.js";

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

  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  app.get("/api/courses", findAllCourses);


  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  app.post("/api/courses", createCourse);




// import Database from "../Database/index.js"

// /**
//  * Now that we moved the Database to the server, we have to make it available 
//  * to the React.js client application through a Web API 
//  * (Application Programming Interface). 
//  * The exercise below makes the courses available at 
//  * http://localhost:4000/api/courses. 
//  * 
//  * @param {*} app 
//  */
// export default function CourseRoutes(app) {
//   //get all courses
//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });

  // /**
  //  * Create New Course & Add to Database:
  //  * New course is passed in the HTTP body from the client is appeneded to
  //  * the end of the courses array in the Dashboard. Course is given new
  //  * unique identifier and sent back to client as response. 
  //  */
  // app.post("/api/courses", (req, res) => {
  //   const course = { ...req.body,
  //     _id: new Date().getTime().toString() };
  //   Database.courses.push(course);
  //   res.send(course);
  // });

  /**
   * Delete Route that parses the id of course as path param and removes
   * corresponding course from courses array.
   * Response = Status 204
   */
  const deleteCourseROUTE = async (req,res) => {
    const status = await dao.deleteCourseDAO(req.params.courseId);
    res.json(status);
  }
  app.delete("/api/courses/:courseId", deleteCourseROUTE);
  



  /**
   * Update Route
   */
  const updateCourseROUTE = async (req,res) => {
    const status = await dao.updateCourseDAO(courseId, req.body);
    res.json(status);
  };
  app.put("/api/courses/:courseId", updateCourseROUTE); 
      

}