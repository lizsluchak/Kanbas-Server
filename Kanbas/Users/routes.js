import * as dao from "./dao.js";
let currentUser = null;

/**
 * UserRoutes module for defining RESTful API routes related to User operations.
 * Integrates with a DAO layer to perform CRUD operations on user data.
 * 
 * @param {Object} app - The Express app instance.
 */
export default function UserRoutes(app) {

  // ====================================================
  // AUTHENTICATION OPERATIONS
  // ====================================================

  /**
   * Authenticates a user by their username and password.
   * The authenticated user is stored in a server variable as the current user.
   * @param {Object} req - The request object containing username and password.
   * @param {Object} res - The response object.
   */
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
  };
  app.post("/api/users/signin", signin);

  /**
   * Gives access to current user
   * @param {*} req 
   * @param {*} res 
   */
  const profile = async (req, res) => {
    res.json(currentUser);
  };
  app.post("/api/users/profile", profile);

  
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
      return;
    }
    currentUser = await dao.createUser(req.body);
    res.json(currentUser);
  };
  app.post("/api/users/signup", signup);


  // ====================================================
  // CREATE SERVER ROUTES
  // ====================================================

  /**
   * Creates a new user with the provided details.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);


  // ====================================================
  // READ SERVER ROUTES
  // ====================================================

  /**
   * Retrieves all users or filters by role or name if specified in query params.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const findAllUsers = async (req, res) => {
    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }

    // Parse name from query string and find users whose first or last names partially match.
    if (name) {
      const users = await dao.findUsersByPartialName(name);
      res.json(users);
      return;
    }

    const users = await dao.findAllUsers();
    res.json(users);
  };
  app.get("/api/users", findAllUsers);

  /**
   * Retrieves a user by their unique identifier.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/users/:userId", findUserById);




  // ====================================================
  // UPDATE SERVER ROUTES
  // ====================================================

  /**
   * Updates a user's details based on their unique identifier.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    res.json(status);
  };
  app.put("/api/users/:userId", updateUser);

  // ====================================================
  // DELETE SERVER ROUTES
  // ====================================================

  /**
   * Deletes a user by their unique identifier.
   * Makes deleteUser operation available as a RESTful API endpoint.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const deleteUser = async (req, res) => {
    console.log("delete user", req.params.userId);
    const status = await dao.deleteUser(req.params.userId);
    console.log("status after delete", status);
    res.json(status);
  };
  app.delete("/api/users/:userId", deleteUser);

}




