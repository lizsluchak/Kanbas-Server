import model from "./model.js";

/**
 * DAO: DAOs implement high level data operations based on lower level Mongoose models.
 */

export const createUser = (user) => {} // implemented later

/**
 * findAllUsers DAO function: 
 * Retrieves all users from Users MongoDB Collection. Uses Mongoose model 
 * ~find~ function which retrieves all documents from a collection
 * @returns all users from Users collection 
 */
export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });