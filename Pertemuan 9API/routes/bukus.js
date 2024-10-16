var express = require("express");
var router = express.Router();

const Buku = require("../model/buku");
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

router.post("/", (req, res) => {
  console.log(req.body); // Ini akan mencetak data yang diterima dari frontend
  
  const buku = new Buku({
    judul: req.body.judul,
    penulis: req.body.penulis,
    genre: req.body.genre,
  });

  buku.save()
    .then((createdBuku) => {
      res.status(201).json({
        message: "Data Berhasil disimpan",
        bookId: createdBuku._id,
      });
    })
  });

router.get("/", (req, res) => {
  Buku.find().then((documents) => {
    res.status(201).json({
      message: "get Data Buku",
      bukus: documents,
    });
  });
});

router.delete("/:id", (req, res) => {
  Buku.deleteOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      message: "Buku berhasil Dihapus",
    });
  });
});

router.put("/:id", (req, res) => {
  const buku = new Buku({
    _id : req.body.id,
    judul: req.body.judul,
    penulis: req.body.penulis,
    genre: req.body.genre,
  });

  Buku.updateOne({_id: req.params.id},buku).then((hasil)=>{
    res.status(200).json({
        message : 'Update berhasil',
        result : hasil
    })
  })
});
module.exports = router;
