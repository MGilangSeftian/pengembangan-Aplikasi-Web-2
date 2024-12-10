var express = require("express");
var router = express.Router();


const Bukucontroller = require("../controller/buku.js");
const checkAuth = require("../middleware/check-auth.js");
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari buku router');
// });

// router.post("/", (req, res) => {
//   const buku = new Buku({
//     judul: req.body.judul,
//     penulis: req.body.penulis,
//     genre: req.body.genre,
//   });

//   console.log(buku);
//   buku.save().then((createdBuku) => {
//     res.status(201).json({
//       message: "Data Berhasl disimpan ",
//       bookId: createdBuku._id,
//     });
//   });
// });

router.post("/",checkAuth,Bukucontroller.createBuku) ;
  

router.get("/",checkAuth, Bukucontroller.readBuku);

router.delete("/:id",checkAuth,Bukucontroller.deleteBuku);

router.put("/:id",checkAuth,Bukucontroller.updateBuku); 

module.exports = router;
