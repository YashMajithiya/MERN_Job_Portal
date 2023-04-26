  //Connecting MongoDB With this Variable
  const mongoose = require("mongoose");
  //Creating Table For Application with MongoDB
  let schema = new mongoose.Schema(
    {
      //Storing UserID
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing recriterID
      recruiterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing JobID
      jobId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      //Storing Status
      status: {
        type: String,
        enum: [
          "applied", // when a applicant is applied
          "shortlisted", // when a applicant is shortlisted
          "accepted", // when a applicant is accepted
          "rejected", // when a applicant is rejected
          "deleted", // when any job is deleted
          "cancelled", // an application is cancelled by its author or when other application is accepted
          "finished", // when job is over
        ],
        default: "applied",
        required: true,
      },
      //Storing Date Of Applications
      dateOfApplication: {
        type: Date,
        default: Date.now,
      },
      //Storing Date Of Joining
      dateOfJoining: {
        type: Date,
      //Validating All
        validate: [
          {
            validator: function (value) {
              return this.dateOfApplication <= value;
            },
            msg: "dateOfJoining should be greater than dateOfApplication",
          },
        ],
      },
      sop: {
        type: String,
        //Validation
        validate: {
          validator: function (v) {
            return v.split(" ").filter((ele) => ele != "").length <= 250;
          },
          msg: "Statement of purpose should not be greater than 250 words",
        },
      },
    },
    { collation: { locale: "en" } }
  );
  module.exports = mongoose.model("applications", schema);
