const express = require("express");
const router = express.Router();
const {   
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser, 
} = require("../controllers");


router.post("/users", createUser);
router.get("/users", readUsers);
router.get("/users/:id", readUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;