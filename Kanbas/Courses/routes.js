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
    const { courseId } = req.params; 
    const status = await dao.updateCourseDAO(courseId, req.body);
    res.json(status);
  };
  app.put("/api/courses/:courseId", updateCourseROUTE); 
      

}