"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// creating user model here
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const fullNameSchema = new mongoose_1.Schema({
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
const fullAddrssSchema = new mongoose_1.Schema({
    street: { type: String, required: [true, "Street is required"] },
    city: { type: String, required: [true, "City is required"] },
    country: { type: String },
});
const productSchema = new mongoose_1.Schema({
    productName: { type: String, required: [true, "Product Name is required"] },
    price: { type: String, required: [true, "Price is required"] },
    quantity: { type: String, required: [true, "Quantity is required"] },
});
const userSchema = new mongoose_1.Schema({
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
    orders: { type: [productSchema] },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
// finding specific fileds
userSchema.pre("find", function () {
    this.find({}).select(" username fullName age email address  -_id ");
});
// finding single data
userSchema.pre("findOne", function () {
    this.findOne({}).select("  -_id  -__v");
});
// // finding only orders data
// userSchema.pre("findOne", function () {
//   this.findOne({}).select("orders  -_id  -__v");
// });
// generating has paaword
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salt_rounds));
        //   user.exclude("password");
        next();
    });
});
// deleting password feild into the response
userSchema.methods.toJSON = function () {
    const passdelete = this.toObject();
    delete passdelete.password;
    return passdelete;
};
// after hasing removing the password feild
userSchema.post("save", function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        //   doc.password.select("-password")
        doc.password = "";
        next();
    });
});
// custom static method is here
userSchema.statics.isUserExist = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const userExist = yield exports.User.findOne({ userId });
        return userExist;
    });
};
// calculating average price
userSchema.statics.UserModel = function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
};
exports.User = (0, mongoose_1.model)("User", userSchema);
