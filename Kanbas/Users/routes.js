import * as dao from "./dao.js"

export default function UserRoutes(app) {
  const createUser = async (req, res) => {};
  const deleteUser = async (req, res) => {};

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  app.get("/api/users", findAllUsers);

  const findUserById = async (req, res) => {};
  const updateUser = async (req, res) => {};
  const signup = async (req, res) => {};
  const signin = async (req, res) => {};
  const signout = (req, res) => {};
  const profile = async (req, res) => {};

  app.post("/api/users", createUser);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}