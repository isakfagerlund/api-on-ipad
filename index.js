const express = require('express')
const app = express()

const fagerlunds = [
  { name: "Isak", hobby: "Coding" },
  { name: "Xiao Wen", hobby: "DIY" },
  { name: "Filou", hobby: "He is a dog"}
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/family", (req, res) => {
  res.json(fagerlunds);
});

app.listen("1234", () =>
  console.log(`Example app listening on port 1234!`),
);
