const { response } = require("express");
const messageModel = require("../models/messageModel");

const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = new messageModel({
    chatId, senderId, text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

const getMessages = async (req, res) => {
     const { chatId } = req.params
     if (chatId) console.log("Chat Id: ", chatId)
     try {
          const messages = await messageModel.find({ chatId })
          res.status(200).json(messages)
     } catch (error) {
          console.log(error);
          res.status(500).json(error.message);
     }
}

module.exports = { createMessage, getMessages };
