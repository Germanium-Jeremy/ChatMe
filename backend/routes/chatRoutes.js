const express = require('express')
const { route } = require('./userRoutes')
const { createChat, findUserChats, findChat } = require('../controllers/chatController')

require('dotenv').config()

const cChart = process.env.VERSIONS + process.env.NEW_CHAT
const allChart = process.env.VERSIONS + process.env.GET_USER_CHATS
const singleChart = process.env.VERSIONS + process.env.SINGLE_CHAT

const router = express.Router()

router.post(cChart, createChat)
router.get(allChart + "/:userId", findUserChats)
router.get(singleChart + "/:firstId/:secondId", findChat)

module.exports = router