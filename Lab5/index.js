/**
 * Lab 5 Function:
 * 
 * 
 * Server Side Exercises. 
 * @param {*} app app reference to express module
 */

import PathParameters from "./PathParameters.js";



const Lab5 = (app) => {

    app.get("/Lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    PathParameters(app);

};
export default Lab5;
