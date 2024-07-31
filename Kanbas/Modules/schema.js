import mongoose from "mongoose"; //load mongoose library

/**
 * Schema for modules stored in mongoDb
 * As a nonrelational database, it is the applications responsiblity to define data structure
 */
const moduleSchema = new mongoose.Schema({
    name: String,
    description: String, 
    course: String, 
    lessons: [{
        id: String, 
        name: String,
        description: String,
        module: String, 
    }]
  },
  { collection: "modules" } 
);
export default moduleSchema;