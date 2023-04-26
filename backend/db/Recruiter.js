  //Variable For connecting MongoDB
  const mongoose = require("mongoose");
  //Logic for Creating Table With MongoDB
  let schema = new mongoose.Schema(
    {
      //Storing userID
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing Name
      name: {
        type: String,
        required: true,
      },
      //Storing Contact Number
      contactNumber: {
        type: String,
        //Validation
        validate: {
          validator: function (v) {
            return v !== "" ? /\+\d{1,3}\d{10}/.test(v) : true;
          },
          msg: "Phone number is invalid!",
        },
      },
      //Storing Bio
      bio: {
        type: String,
      },
    },
    { collation: { locale: "en" } }
  );
  module.exports = mongoose.model("RecruiterInfo", schema);