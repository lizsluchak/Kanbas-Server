/**
 * Lab 5 Function:
 * 
 * 
 * Server Side Exercises. 
 * @param {*} app app reference to express module
 */
const Lab5 = (app) => {
    app.get("/a5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });

};
export default Lab5;
