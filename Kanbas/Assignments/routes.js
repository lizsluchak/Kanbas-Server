/******************************************************************************
 *                          Module: AssignmentRoutes                          *
 * -------------------------------------------------------------------------- *
 * Description:                                                               *
 * This module defines the routes for handling assignment data, including     *
 * creating, reading, updating, and deleting assignments.                     *
 *                                                                            *
 * Functions:                                                                 *
 * - CourseRoutes: Initializes the course-related routes                      *
 *                                                                            *
 * Dependencies:                                                              *
 * - Database: Module for accessing and manipulating course data              *
 * -------------------------------------------------------------------------- *
 ******************************************************************************/

/* ============================ */
/*         1. Imports           */
/* ============================ */
import Database from "../Database/index.js"




/* ============================ */
/*    2. Function Definitions   */
/* ============================ */

/**
 * Initializes the course-related routes for the given Express application.
 * 
 * @param {*} app - The Express application instance
 */
export default function AssignmentRoutes(app) {
    // GET all assignments
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        console.log("help", cid);
        const assignments = Database.assignments.filter((a) => a.course === cid);
        console.log(assignments)
        res.json(assignments);
    });

    // /**
    //  * Create New Course & Add to Database:
    //  * New course is passed in the HTTP body from the client and appended to
    //  * the end of the courses array in the Database. The course is given a new
    //  * unique identifier and sent back to the client as a response. 
    //  */
    // app.post("/api/courses", (req, res) => {
    //     const course = { ...req.body, _id: new Date().getTime().toString() };
    //     Database.courses.push(course);
    //     res.send(course);
    // });

    /**
     * Delete Assignment:
     * Parses the :aid of the course from the path parameter and removes the
     * corresponding assignment via :aid from the courses array in the Database.
     * Response: Status 204
     */
    app.delete("/api/courses/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        Database.assignments = Database.assignments.filter((a) => a._id !== aid);
        res.sendStatus(204);
    });

    // /**
    //  * Update a course:
    //  * Parses the id of the course from the path parameter and updates the
    //  * corresponding course in the courses array in the Database.
    //  * Response: Status 204
    //  */
    // app.put("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     const course = req.body;
    //     Database.courses = Database.courses.map((c) =>
    //         c._id === id ? { ...c, ...course } : c
    //     );
    //     res.sendStatus(204); // Success
    // });
}
