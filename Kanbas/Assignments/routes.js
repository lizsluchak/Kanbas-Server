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
        const assignments = Database.assignments.filter((a) => a.course === cid);
        res.json(assignments);
    });

    //CREATE new assignment via POST
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid, aid } = req.params
        console.log("current assignmnets:", cid, aid);
        const newAssignment = { 
            ...req.body,
            course: cid,  
            _id: new Date().getTime().toString() };
        Database.assignments.push(newAssignment);
        console.log(newAssignment);
        res.json(newAssignment);
    });

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
