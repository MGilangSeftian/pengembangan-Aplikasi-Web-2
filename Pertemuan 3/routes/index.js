const express = require("express");

const router = express.Router();
const mhsRouter = require("./Mahasiswa");

router.use("/Mahasiswa", mhsRouter);

module.exports = router;

//error 404/ url tidak ditemukan
module.exports = router;