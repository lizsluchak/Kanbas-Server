/**
 * Lab 5 Function:
 * 
 * 
 * Server Side Exercises. 
 * @param {*} app app reference to express module
 */

import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";



const Lab5 = (app) => {

    app.get("/Lab5/welcome", (req, res) => {
        res.send("Welcome to Lab 5");
    });
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);

};
export default Lab5;
