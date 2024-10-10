var express = require('express');
var router = express.Router();

const Buku = require("../model/buku");
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari buku router');
// });

router.post('/',(req,res) =>{
    const buku =new Buku({
        judul : res.body.judul,
        penulis : res.body.penulis,
        genre : res.body.genre,
    });

    console.log(buku);
    buku.save().then((createdbBuku)=>{
        res.status(201).json({
            message : "Data Berhasl disimpan ",
            bookId  : createdbBuku.id
        });
    });

});

module.exports = router;
