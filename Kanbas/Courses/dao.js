import model from "./model.js";




//CREATE Course Route
export const createCourse = (course) => {return model.create(course)};


//RETRIEVE Course Route
export const findAllCourses = () => model.find();


//UPDATE Course Route
export const updateCourseDAO = (courseId, course) => model.updateOne({ _id: courseId}, {$set: course});



//DELETE Course Route
export const deleteCourseDAO = (courseId) => model.deleteOne({ _id: courseId});