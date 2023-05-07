const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true, maxlength: 50 },
    email: {
      type: String,
      minlength: 7,
      unique: true,
      required: [true, "Email is required."],
      lowercase: true,
      maxlength: 64,
      index: true,
      validate: {
        validator: (email) => {
          const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(email);
        },
        message: (props) => `${props.value} is not in correct format !!`,
      },
    },
    password: {
      type: String,
      required: [true, "password required !!"],
      minLength: [5, "isnt is too short !!"],
      maxlength: 20,
    },
    contactNumber: { type: String },
    DOJ: { type: Date },
    info: {
      bio: {
        type: String,
        maxlength: 200,
        default: "",
      },
      birthday: {
        type: Date,
      },
      gender: {
        type: String,
        default: "unspecified",
        enum: ["male", "female", "unspecified"],
      },
    },
    lastname: {
      type: String,
      maxlength: 50,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: String,
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);