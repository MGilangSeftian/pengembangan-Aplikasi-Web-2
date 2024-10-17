var express = require("express");
var router = express.Router();


const Bukucontroller = require("../controller/buku.js");
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

router.post("/",Bukucontroller.createBuku) ;
  

router.get("/", Bukucontroller.readBuku);

router.delete("/:id",Bukucontroller.deleteBuku);

router.put("/:id",Bukucontroller.updateBuku); 
module.exports = router;
