const express = require("express");
const MahasiswaRouter = express.Router();

MahasiswaRouter.route("/")
  .get((req, res) => {
    res.send("Get data mahasiswa");
  })
  .post((req, res) => {
    res.send("post data mahasiswa");
  });

MahasiswaRouter.route("/:npm")
  .put((req, res) => {
    res.send("put mahasiswa " + req.params.npm);
  })
  .delete((req, res) => {
    res.send("Delete Mahasiswa" + req.params.npm);
  });

MahasiswaRouter.route("/kelas").get((req, res) => {
  const kelas = req.query.idkelas;
  res.send("Kelasnya adalah " + kelas);
});
module.exports = MahasiswaRouter;
