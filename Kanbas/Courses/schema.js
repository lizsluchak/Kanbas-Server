import mongoose from "mongoose"; //load mongoose library

/**
 * Schema for user data stored in mongoDb
 * As a nonrelational database, it is the applications responsiblity to define data structure
 */
const courseSchema = new mongoose.Schema({
    name: String,
    number: String, 
    startDate: String,
    endDate: String,
    department: Date,
    credits: Number,
    description: String, 
    image_url: String, 
  },
  { collection: "courses" } //store in coursesCollection
);
export default courseSchema;


