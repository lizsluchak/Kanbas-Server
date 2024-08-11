import mongoose from "mongoose"; //load mongoose library


const quizSchema = new mongoose.Schema({
    qid: String,
    title: String,
    course: String,
    description: String, 
    points: String, 
    assignTo: String, 
    assignmentGroup: String, 
    quizType: String, 
    shuffleAnswers: String,
    timeLimit: String,
    multipleAttempts: String,
    showCorrectAnswers: String, 
    accessCode: String,
    oneQuestionAtATime: String, 
    webcamRequired: String, 
    lockQuestionsAfterAnwsering: String, 
    displayGradeAs: String, 
    dueDate: String, 
    availableDate: String, 
    availableTime: String, 
    dueTime: String, 
    untilDate: String,
  },
  { collection: "quizzes" } //store in coursesCollection
);
export default quizSchema;
