import model from "./model.js";


export const findAllCourses = () => model.find();

export const createCourse = (course) => {
    delete course._id
    return model.create(course)
}