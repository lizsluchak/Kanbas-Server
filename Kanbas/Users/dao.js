import model from "./model.js";

/**
 * Data Access Object (DAO) module for performing CRUD operations on User data.
 * Utilizes a Mongoose model for interacting with a MongoDB database.
 */


// ====================================================
// CREATE OPERATIONS
// ====================================================

/**
 * Creates a new user in the Users collection.
 * @param {Object} user - The user object to be created, without an `_id` field.
 * @returns {Promise<Object>} The created user document.
 */
export const createUser = (user) => {
  delete user._id;
  return model.create(user);
};

// ====================================================
// READ OPERATIONS
// ====================================================

/**
 * Retrieves all users from the Users collection.
 * @returns {Promise<Array>} An array of all user documents.
 */
export const findAllUsers = () => 
  model.find();

/**
 * Retrieves users from the Users collection filtered by role.
 * @param {string} role - The role to filter users by.
 * @returns {Promise<Array>} An array of user documents that match the specified role.
 */
export const findUsersByRole = (role) => 
  model.find({ role });

/**
 * Retrieves users with a first or last name matching the given partial name.
 * Uses a case-insensitive regular expression for matching.
 * @param {string} partialName - The partial name to search for.
 * @returns {Promise<Array>} An array of user documents with matching names.
 */
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' flag for case-insensitivity
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

/**
 * Retrieves a user by their unique identifier.
 * @param {string} userId - The unique identifier of the user.
 * @returns {Promise<Object>} The user document, if found.
 */
export const findUserById = (userId) => 
  model.findById(userId);

/**
 * Retrieves a user by their username.
 * @param {string} username - The username of the user.
 * @returns {Promise<Object>} The user document, if found.
 */
export const findUserByUsername = (username) =>
  model.findOne({ username });

/**
 * Retrieves a user by their username and password.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} The user document, if found.
 */
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

// ====================================================
// UPDATE OPERATIONS
// ====================================================

/**
 * Updates a user's details identified by their unique identifier.
 * @param {string} userId - The unique identifier of the user.
 * @param {Object} user - The user object containing updated fields.
 * @returns {Promise<Object>} The result of the update operation.
 */
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

// ====================================================
// DELETE OPERATIONS
// ====================================================

/**
 * Deletes a user from the Users collection based on their unique identifier.
 * @param {string} userId - The unique identifier of the user.
 * @returns {Promise<Object>} The result of the delete operation.
 */
export const deleteUser = (userId) =>
  model.deleteOne({ _id: userId });
