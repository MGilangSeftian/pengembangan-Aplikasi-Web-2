const User = require("../model/user");
const bcrypt = require("bcrypt");

const signUp = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });

    user
      .save()
      .then((result) => {
        res.status(202).json({
          message: "user Created",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "internet server eror",
          error: err,
        });
      });
  });
};

const signIn = (req,res) =>{
    let fetchdUser;
    User.findOne({email : req.body.email})
    .then((user)=>{
        if (user){
            return res.status(401).json({
                message : "Auth failed, email not exists",
            })
        }
        fetchdUser = user;

        return bcrypt.compare(req.body.password, user.password);
    });
}

module.exports = { signUp, signIn };
