import * as dao from "./dao.js";


export default function QuizRoutes(app) {

  // ====================================================
  // CREATE QUIZ SERVER ROUTES
  // ====================================================

  const createQuiz_sROUTE = async (req, res) => {
    const newQuiz = await dao.createQuiz_DAO(req.body);
    console.log(newQuiz); 
    res.json(newQuiz);
  };
  app.post("/api/quizzes", createQuiz_sROUTE);


  // ====================================================
  // READ QUIZZES SERVER ROUTES
  // ====================================================

  const findAllQuizzes_sROUTE = async (req, res) => {
    const { course, search } = req.query;
    if (course) {
      const quizzes = await dao.findQuizzesByCourse_DAO(course);
      res.json(quizzes);
      return;
    }

    if (search) {
        const quizzes = await dao.findQuizzesByPartialName_DAO(search);
        res.json(quizzes);
        return;
    }

    const quizzes = await dao.findAllQuizzes_DAO();
    res.json(quizzes);
  };
  app.get("/api/quizzes", findAllQuizzes_sROUTE);


  /**
   * Retrieves a user by their unique identifier.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const findQuizById_sROUTE = async (req, res) => {
    console.log(req.params.quizId);
    const quiz = await dao.findQuizById_DAO(req.params.quizId);
    console.log(quiz);
    res.json(quiz);
  };
  app.get("/api/quizzes/:quizId", findQuizById_sROUTE);




  // ====================================================
  // UPDATE QUIZ SERVER ROUTES
  // ====================================================

  const updateQuiz_sROUTE = async (req, res) => {
    const { quizId } = req.body;
    console.log("quizId passed", quizId);
    const status = await dao.updateQuiz_DAO(quizId, req.body);
    res.json(status);
  };
  app.put("/api/quizzes/:quizId", updateQuiz_sROUTE);

  // ====================================================
  // DELETE QUIZ SERVER ROUTES
  // ====================================================

  /**
   * Deletes a user by their unique identifier.
   * Makes deleteUser operation available as a RESTful API endpoint.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  const deleteQuiz_sROUTE = async (req, res) => {
    const status = await dao.deleteQuiz_DAO(req.params.quizId);
    res.json(status);
  };
  app.delete("/api/quizzes/:quizId", deleteQuiz_sROUTE);


}


