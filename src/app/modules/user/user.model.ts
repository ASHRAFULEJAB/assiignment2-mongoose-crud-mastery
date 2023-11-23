// creating user model here
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { Fullname, User, fullAddress } from "./user.interface";
import config from "../../config";
import { query } from "express";

const fullNameSchema = new Schema<Fullname>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
});

const fullAddrssSchema = new Schema<fullAddress>({
  street: { type: String, required: [true, "Street is required"] },
  city: { type: String, required: [true, "City is required"] },
  country: { type: String },
});

const userSchema = new Schema<User>({
  userId: { type: Number, unique: true },
  username: { type: String, unique: true },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: [10, "password should be at least 10 characters!"],
    select: false,
  },
  fullName: { type: fullNameSchema, required: [true, "Full Name is required"] },
  age: { type: Number, required: [true, "Age is required"] },
  email: { type: String, required: [true, "Email is required"] },
  isActive: {
    type: Boolean,
    default: false,
  },
  hobbies: [
    {
      type: String,
    },
  ],
  address: {
    type: fullAddrssSchema,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// finding specific fileds

userSchema.pre("find", function () {
  this.find({}).select(" username fullName age email address isDeleted -_id ");
});

// finding single data
userSchema.pre("findOne", function () {
  this.findOne({}).select("  -_id  -__v");
});

// generating has paaword

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  //   user.exclude("password");
  next();
});
// deleting password feild into the response
userSchema.methods.toJSON = function () {
  var passdelete = this.toObject();
  delete passdelete.password;
  return passdelete;
};

// after hasing removing the password feild
userSchema.post("save", async function (doc, next) {
  //   doc.password.select("-password")
  doc.password = "";
  next();
});

export const UserModel = model<User>("User", userSchema);
