import mongoose from "mongoose"; //load mongoose library

/**
 * Schema for user data stored in mongoDb
 * As a nonrelational database, it is the applications responsiblity to define data structure
 */
const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true },
    name: String,
    number: String, 
    startDate: String,
    endDate: String,
    department: Date,
    credits: Number,
    image_url: String, 
    description: String, 
  },
  { collection: "courses" } //store in coursesCollection
);
export default courseSchema;