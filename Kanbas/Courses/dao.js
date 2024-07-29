import model from "./model.js";


//CREATE Course DAO Route
export const createCourse = (course) => {return model.create(course)};


//RETRIEVE Course DAO Route
export const findAllCourses = () => model.find();


//UPDATE Course DAO Route
export const updateCourseDAO = (courseId, course) => model.updateOne({ _id: courseId}, {$set: course});


//DELETE Course DAO Route
export const deleteCourseDAO = (courseId) => model.deleteOne({ _id: courseId});