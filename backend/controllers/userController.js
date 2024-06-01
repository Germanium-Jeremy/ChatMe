const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "4d" });
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user)
      return res.status(400).json(`User with Email "${email}" already exists`);
    if (!username || !email || !password)
      return res.status(400).json("All Fields Are Required...");
    if (!validator.isEmail(email))
      return res.status(400).json("Email is not Correct...");
    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password is not Strong...");

    user = new userModel({ username, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);
    res
      .status(200)
      .json({
        _id: user._id,
        username,
        email,
        token,
        message: "You have successfully Signed Up",
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
}

const loginUser = async (req, res) => {
     const { email, password } = req.body

     try {
          let user = await userModel.findOne({email})
          if (!user) return res.status(400).json("Invalid Email...")

          const isValidPassword = await bcrypt.compare(password, user.password)
          if (!isValidPassword) return res.status(400).json("Invalid Password ..")

          const token = createToken(user._id)
          res.status(200).json({_id: user._id, username: user.username, email, token, message: "Loged In Successful"})
     } catch (error) {
          console.log(error.message);
          res.status(500).json(error.message);
     }
}

const findUser = async (req, res) => {
     const userId = req.params.userId

     try {
          const user = await userModel.findById(userId)
          res.status(200).json(user)
     } catch (error) {
          console.log(error.message);
          res.status(500).json(error.message); 
     }
}

const getAllUsers = async (req, res) => {
     try {
          const users = await userModel.find({})
          res.status(200).json(users)
     } catch (error) {
          console.log(error.message);
          res.status(500).json(error.message); 
     }
}

module.exports = { registerUser, loginUser, findUser, getAllUsers };
