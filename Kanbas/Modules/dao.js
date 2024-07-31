import model from "./model.js";


//CREATE MODULE DAO Route
export const createModuleDAO = (module) => {return model.create(module)};


//RETRIEVE MODULE DAO Route
export const findAllModulesDAO = () => model.find();


//UPDATE MODULE DAO Route
export const updateModuleDAO = (moduleId, module) => model.updateOne({ _id: moduleId}, {$set: module});


//DELETE MODULE DAO Route
export const deleteModuleDAO = (moduleId) => model.deleteOne({ _id: moduleId});