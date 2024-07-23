import model from "./model.js";

/**
 * DAO: DAOs implement high level data operations based on lower level Mongoose models.
 */

export const createUser = (user) => {
    delete user._id
    return model.create(user);
  }
  

/**
 * findAllUsers DAO function: 
 * Retrieves all users from Users MongoDB Collection. Uses Mongoose model 
 * ~find~ function which retrieves all documents from a collection
 * @returns all users from Users collection 
 */
export const findAllUsers = () => model.find();

/**
 * findUsersByRole DAO function:
 * Filters the mondgoDB users collection by the role property. Mongoose model's
 * find function can also take as argument a JSON object used to pattern match
 * documents in the collection. 
 * 
 * The {role: role} object means that documents will be filtered by their 
 * role property that matches the value role.
 * @param {*} role Role looking to filter users by
 * @returns all users from collection that match Role given
 */
export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })

/**
 * findUsersByPartialName DAO Function:
 * filters users by their first or last name by creating a regular expression
 * uses to pattern match the firstname or lastname fiels fo the documents in the
 * users collection
 * @param {*} partialName 
 * @returns 
 */
export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive ????????
    return model.find({
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
  };
  
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });

/** UpdateUser DAO Function:
 * updates a single document by first indentifying it by its primary key, and
 * then updating the matching fields in the user parameter
 * 
 * @param {*} userId 
 * @param {*} user 
 * @returns 
 */
export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });

/** Delete User DAO Function:
 * Removes a single user in users collection based on primary key
 * @param {*} userId 
 * @returns 
 */
export const deleteUser = (userId) => model.deleteOne({ _id: userId });