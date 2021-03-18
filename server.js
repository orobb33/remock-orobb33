const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});


app.get("/learnmore", (req, res) => {
    res.sendFile(path.resolve("./public/blog-post-page.html"))
})






app.listen(PORT, () => {
  console.log("server is running");
});

