const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes/index");
app.get("/", (req, res) => {
  res.send("M. Gilang Seftian!");
});

app.use(route);

// app.get("/Mahasiswa", (req, res) => {
//   res.send("Get data mahasiswa");
// });

// app.post("/Mahasiswa", (req, res) => {
//   res.send("post data mahasiswa");
// });

// app.put("/Mahasiswa/:npm", (req, res) => {
//   res.send("put mahasiswa " + req.params.npm);
// });

// app.delete("/Mahasiswa/:npm", (req, res) => {
//   res.send("Delete Mahasiswa" + req.params.npm);
// });
app.listen(port, () => {
  console.log("Example app listening on port port!" + port);
});

//Run app, then load http://localhost:port in a browser to see the output.
