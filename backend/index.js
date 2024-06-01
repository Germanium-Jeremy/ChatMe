const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/userRoutes");
const chatRoute = require("./routes/chatRoutes");
const messageRoute = require("./routes/messageRoutes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://chat-me-6r1j.vercel.app", "http://localhost:5173"],
    methods: "*",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use("/api", userRoute);
app.use("/api", chatRoute);
app.use("/api", messageRoute);
app.get("/", (req, res) => {
  res.send("Index route for our chat app ..");
});

const port = process.env.PORT || 5000;
const mongo = process.env.CONNECTION_STRING;

mongoose
  .connect(mongo, {})
  .then(() => console.log("Mongo Db Connection Connected Successfully"))
  .catch((error) => console.log("Connection Mongo Db Failed: ", error.message));

app.listen(port, () => console.log("Server Running on port: " + port));
