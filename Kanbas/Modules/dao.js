import model from "./model.js";


//CREATE MODULE DAO Route
export const createModuleDAO = (module) => {
    delete module._id
    return model.create(module)
};


//RETRIEVE MODULE DAO Route
export const findAllModulesDAO = (course) => model.find({ course });


//UPDATE MODULE DAO Route
export const updateModuleDAO = (moduleId, module) => model.updateOne({ _id: moduleId}, {$set: module});


//DELETE MODULE DAO Route
export const deleteModuleDAO = (moduleId) => model.deleteOne({ _id: moduleId});