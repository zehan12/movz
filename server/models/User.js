const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const SECRET = config.jwt.secret;

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
      maxlength: 90,
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
    lastName: {
      type: String,
      maxlength: 50,
    },
    role: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      default: 1, // 1 OK | 2 Warning | 3 Blocked | 4 Ban
    },
    dateJoined: {
      type: Date,
      default: Date.now,
      required: true,
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

userSchema.pre("save", async function (next) {
  if (this.info.birthday === null) this.info.birthday = "";
  if (this.image === undefined)
    this.image = `http://gravatar.com/avatar/${moment().unix()}?d=identicon`;

  console.log("TRIGGERED", this);

  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  } else {
    next();
  }
});

userSchema.methods.verifyPassword = async function (password) {
  try {
    var result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    return error;
  }
};

// Generate JWT token
userSchema.methods.generateToken = async function () {
  try {
    const user = this;
    const token = await jwt.sign(user._id.toHexString(), SECRET);
    const tokenExp = moment().add(1, "hour").valueOf();

    return {
      token,
      tokenExp,
    };
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to generate JWT token");
  }
};

module.exports = mongoose.model("User", userSchema);
