import * as dao from "./dao.js";
let currentUser = null;


export default function UserRoutes(app) {

  const findAllUsers = async (req, res) => {

    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }

    const users = await dao.findAllUsers();
    res.json(users);
  };
  app.get("/api/users", findAllUsers);
  
}
