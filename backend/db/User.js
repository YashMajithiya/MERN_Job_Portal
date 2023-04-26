  //Variable For connecting MongoDB
  const mongoose = require("mongoose");
  //Bcrypt Is used for Hashing Password
  const bcrypt = require("bcrypt");
  require("mongoose-type-email");

  //Logic for Creating Table With MongoDB
  let schema = new mongoose.Schema(
    {
      //Getting Email From user
      email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        lowercase: true,
        required: true,
      },
      //Getting Password From user
      password: {
        //Password type string
        type: String,
        required: true,
      },
      //Getting Type From user
      type: {
        type: String,
        //Selection Recruiter or applicant
        enum: ["recruiter", "applicant"],
        required: true,
      },
    },
    { collation: { locale: "en" } }
  );
  // Password hashing
  schema.pre("save", function (next) {
    let user = this;
    // if the data is not modified
    if (!user.isModified("password")) {
      return next();
    }

    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
  // Password verification upon login
  schema.methods.login = function (password) {
    let user = this;

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          reject(err);
        }
        if (result) {
          resolve();
        } else {
          reject();
        }
      });
    });
  };
  module.exports = mongoose.model("UserAuth", schema);