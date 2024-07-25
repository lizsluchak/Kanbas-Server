import model from "./model.js";


export const findAllCourses = () => model.find();

export const createCourse = (course) => {
    return model.create(course)
}