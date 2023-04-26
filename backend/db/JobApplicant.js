  //Variable For connecting MongoDB
  const mongoose = require("mongoose");
  //Logic for Creating Table With MongoDB
  let schema = new mongoose.Schema(
    {
      //Storing UserID
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing Name
      name: {
        type: String,
        required: true,
      },
      //Storing Education
      education: [
        {
          //Institution Name
          institutionName: {
            type: String,
            required: true,
          },
          //Institute Start Year
          startYear: {
            type: Number,
            min: 1930,
            max: new Date().getFullYear(),
            required: true,
            validate: Number.isInteger,
          },
          //Institute EndYear
          endYear: {
            type: Number,
            max: new Date().getFullYear(),
            //Validation
            validate: [
              { validator: Number.isInteger, msg: "Year should be an integer" },
              {
                validator: function (value) {
                  return this.startYear <= value;
                },
                msg: "End year should be greater than or equal to Start year",
              },
            ],
          },
        },
      ],
      skills: [String],
      rating: {
        type: Number,
        max: 5.0,
        default: -1.0,
        //Validation
        validate: {
          validator: function (v) {
            return v >= -1.0 && v <= 5.0;
          },
          msg: "Invalid rating",
        },
      },
      //Uploading Resume
      resume: {
        type: String,
      },
      //Uploading Profile
      profile: {
        type: String,
      },
    },
    { collation: { locale: "en" } }
  );
  module.exports = mongoose.model("JobApplicantInfo", schema);