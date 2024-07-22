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
  
}
