const routeUser = require("express").Router();
const {
  getUsers,
  getSaveUser,
  getUserById,
  getLoopsByUser,
  updateUser,
  me,
  getUserByusername,
} = require("../controllers/users");

//define routes for user
routeUser.get("/me", me);
routeUser.put("/update/:id", updateUser);
routeUser.get("/all", getUsers);
routeUser.get("/:id", getUserById);
routeUser.get("/profile/:username", getUserByusername);
routeUser.get("/saves/:id", getSaveUser);
routeUser.get("/loops/:id", getLoopsByUser);

module.exports = routeUser;
