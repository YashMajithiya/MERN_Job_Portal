  //Variable For connecting MongoDB
  const mongoose = require("mongoose");
  //Logic for Creating Table With MongoDB
  let schema = new mongoose.Schema(
    {
      //Storing Category
      category: {
        type: String,
        enum: ["job", "applicant"],
        required: true,
      },
      //Storing receiverId
      receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing senderId
      senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Store Rating
      rating: {
        type: Number,
        max: 5.0,
        default: -1.0,
        validate: {
          validator: function (v) {
            return v >= -1.0 && v <= 5.0;
          },
          msg: "Invalid rating",
        },
      },
    },
    { collation: { locale: "en" } }
  );
  schema.index({ category: 1, receiverId: 1, senderId: 1 }, { unique: true });
  module.exports = mongoose.model("ratings", schema);
