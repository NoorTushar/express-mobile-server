const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
   res.send("Welcome to my mobile server");
});

app.listen(port, () => {
   console.log(`server running at port ${port}`);
});
