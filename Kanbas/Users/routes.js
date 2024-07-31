import * as dao from "./dao.js";
let currentUser = null;


export default function UserRoutes(app) {

  const findAllUsers = async (req, res) => {

    const { role, name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }

    //parse name from query string and use it to find users whose first or last
    //names partially match the name parameter
    if (name) {
      const users = await dao.findUsersByPartialName(name);
      res.json(users);
      return;
    }


    const users = await dao.findAllUsers();
    res.json(users);
  };
  app.get("/api/users", findAllUsers);


  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/users/:userId", findUserById);


  /** Delete User Route: 
   * makes deleteUser opeartion available as a RESTful Web API for integration
   * with the user interface which encodes the id of the user to remove as a
   * path parameter
   * @param {*} req 
   * @param {*} res 
   */
  const deleteUser = async (req, res) => {
    console.log("delete user", req.params.userId);
    const status = await dao.deleteUser(req.params.userId);
    console.log("status after delete", status);
    res.json(status);
};
app.delete("/api/users/:userId", deleteUser);

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const status = await dao.updateUser(userId, req.body);
  res.json(status);
};
app.put("/api/users/:userId", updateUser);

const createUser = async (req, res) => {
  const user = await dao.createUser(req.body);
  res.json(user);
};
app.post("/api/users", createUser);


  
}
