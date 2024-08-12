import model from "./model.js";

/**
 * Data Access Object (DAO) module for performing CRUD operations on User data.
 * Utilizes a Mongoose model for interacting with a MongoDB database.
 */


// ====================================================
// CREATE OPERATIONS
// ====================================================

export const createQuiz_DAO = (quiz) => {
    return model.create(quiz)
};

// ====================================================
// READ OPERATIONS
// ====================================================

export const findAllQuizzes_DAO = () => 
  model.find();

export const findQuizzesByCourse_DAO = (course) => 
    model.find({ course });


export const findQuizzesByPartialName_DAO = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' flag for case-insensitivity
  return model.find({ 
    course,
    $or: [
        { qid: { $regex: regex } }, 
        { title: { $regex: regex } }, 
        { description: { $regex: regex } }, 
        { points: { $regex: regex } }],
  });
};


export const findQuizById_DAO = ( quizId ) => 
  // console.log(quizId);
  model.findById(quizId);


// ====================================================
// UPDATE OPERATIONS
// ====================================================


export const updateQuiz_DAO = (quizId, quiz) => 
    model.updateOne({ _id: quizId}, {$set: quiz});


// ====================================================
// DELETE OPERATIONS
// ====================================================

export const deleteQuiz_DAO = (quizId) =>
  model.deleteOne({ _id: quizId });




