const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");
const app = express();

app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
   res.send("Welcome to my mobile server. wait till all phone loads");
});

app.get("/phones", (req, res) => {
   res.send(phones);
});

app.get("/phone/:id", (req, res) => {
   const id = parseInt(req.params.id);

   const phone = phones.find((phone) => phone.id === id) || {};

   res.send(phone);
});

app.listen(port, () => {
   console.log(`server running at port ${port}`);
});
