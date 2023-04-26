  //Variable For connecting MongoDB
  const mongoose = require("mongoose");
  //Creating Table With MongoDB
  let schema = new mongoose.Schema(
    {
      //Storing userID
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing title
      title: {
        type: String,
        required: true,
      },
      //Storing Maximum Applicants
      maxApplicants: {
        type: Number,
        //Validations
        validate: [
          {
            validator: Number.isInteger,
            msg: "maxApplicants should be an integer",
          },
          {
            validator: function (value) {
              return value > 0;
            },
            msg: "maxApplicants should greater than 0",
          },
        ],
      },
      //Storing maxPositions
      maxPositions: {
        type: Number,
        validate: [
          {
            validator: Number.isInteger,
            msg: "maxPostions should be an integer",
          },
          {
            validator: function (value) {
              return value > 0;
            },
            msg: "maxPositions should greater than 0",
          },
        ],
      },
      //Storing Active Applications
      activeApplications: {
        type: Number,
        default: 0,
        //Validating ActiveApplications
        validate: [
          {
            validator: Number.isInteger,
            msg: "activeApplications should be an integer",
          },
          {
            validator: function (value) {
              return value >= 0;
            },
            msg: "activeApplications should greater than equal to 0",
          },
        ],
      },
      //Storing Accepted Candidates
      acceptedCandidates: {
        type: Number,
        default: 0,
        //Validating the acceptedCandidates 
        validate: [
          {
            validator: Number.isInteger,
            msg: "acceptedCandidates should be an integer",
          },
          {
            validator: function (value) {
              return value >= 0;
            },
            msg: "acceptedCandidates should greater than equal to 0",
          },
        ],
      },
      //Storing Date of Posting
      dateOfPosting: {
        type: Date,
        default: Date.now,
      },
      deadline: {
        type: Date,
        //Validating date Of Posting
        validate: [
          {
            validator: function (value) {
              return this.dateOfPosting < value;
            },
            msg: "deadline should be greater than dateOfPosting",
          },
        ],
      },
      skillsets: [String],
      //Storing Job Types
      jobType: {
        type: String,
        required: true,
      },
      //Storing Durations
      duration: {
        type: Number,
        min: 0,
        validate: [
          {
            validator: Number.isInteger,
            msg: "Duration should be an integer",
          },
        ],
      },
      //Storing Salary
      salary: {
        type: Number,
        //Validation
        validate: [
          {
            validator: Number.isInteger,
            msg: "Salary should be an integer",
          },
          {
            validator: function (value) {
              return value >= 0;
            },
            msg: "Salary should be positive",
          },
        ],
      },
      //Store Rating
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
    },
    { collation: { locale: "en" } }
  );

  module.exports = mongoose.model("jobs", schema);
