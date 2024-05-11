require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>YouTube</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at ${port}`);
});
