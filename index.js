const express = require("express");
const artist = require("./artist");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello From Express server for Artists! Available routes /artist and /artist/:id"
  );
});

app.use("/artist", artist);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
