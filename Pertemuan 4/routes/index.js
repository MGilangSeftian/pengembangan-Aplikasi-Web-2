const express = require('express');
const router = express.Router();

router.use("/",(req,res) => {
    //format data json
    const data = {
        caption: "Mahasiswa",
        layout : "layout/.main-layout",
        data:[
            {
                npm : "2226240045",
                nama : "M. Gilang Seftian",
            },
            {
                npm : "2226240046",
                nama : "Muhammad Wildan",
            },
            {
                npm : "2226240021",
                nama : "Muhammad davit",
            }
        ]
    };
    res.render("index", data);
    //menuju ke views /index.ejs
});

module.exports = router;