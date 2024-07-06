/**
 * object state persists as long as server is running; 
 * rebooting server resets the object
 */

const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment); //use .json instead of .send i fyou know the response is formatted as JSON
    });

    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });
    
  };
  