import mongoose from "mongoose"; //load mongoose library

/**
 * Schema for user data stored in mongoDb
 * As a nonrelational database, it is the applications responsiblity to define data structure
 */
const userSchema = new mongoose.Schema({ //create schema to describe structure of user data
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "users" } //store in usersCollection
);
export default userSchema;