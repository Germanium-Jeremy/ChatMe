const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getAllUsers,
} = require("../controllers/userController");
require("dotenv").config();

const register = process.env.VERSIONS + process.env.USER_REGISTER;
const signin = process.env.VERSIONS + process.env.USER_LOGIN;
const find = process.env.VERSIONS + process.env.USER_FIND;
const all = process.env.VERSIONS + process.env.USER_ALL;

const router = express.Router();

router.post(register, registerUser);
router.post(signin, loginUser);
router.get(find + "/:userId", findUser);
router.get(all, getAllUsers);

module.exports = router;
