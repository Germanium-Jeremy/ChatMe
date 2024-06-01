const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

require("dotenv").config();

const createMessageApi = process.env.VERSIONS + process.env.MESSAGE_CREATE;
const getMess = process.env.VERSIONS + process.env.GET_A_MESSAGE;

const router = express.Router();

router.post(createMessageApi, createMessage);
router.get(getMess + "/:chatId", getMessages);

module.exports = router;
