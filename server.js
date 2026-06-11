const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`run on ${PORT}`));

console.error("Name=>", process.env.NAME);

app.get("/me/:name", (req, res) => {
  console.error("Name=>", req.params.name);
  res.json({ msg: `hello from server,  my name is ${req.params.name}` });
});

app.get("/welcome", (req, res) => {
  console.error("Welcome=>", process.env.NAME);
  res.send(`Welcome ${process.env.NAME}`);
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("/*any", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});