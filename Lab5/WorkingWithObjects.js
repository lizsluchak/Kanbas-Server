/**
 * object state persists as long as server is running; 
 * rebooting server resets the object
 */

const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};

const module = {
    id: "1", 
    name: "NodeJS Module",
    description: "Test module object to practice with client",
    course: "webdev"
};


export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment); //use .json instead of .send i fyou know the response is formatted as JSON
    });

    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params; //object in server
        assignment.title = newTitle; //persists as long as server is running
        res.json(assignment);
    });

    //modify assignment score
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params; //object in server
        assignment.score = newScore; //persists as long as server is running
        res.json(assignment);
    });

    //modify assignment completeion 
    app.get("/lab5/assignment/completed/:newStatus", (req, res) => {
        const { newStatus } = req.params; //object in server
        assignment.completed = newStatus; //persists as long as server is running
        res.json(assignment);
    });



    //route that response with module object, mapped to /lab5/module
    app.get("/lab5/module", (req, res) => {
        res.json(module); //use .json instead of .send if you know the response is formatted as JSON
    });

    //route that retrieve name of module object
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.title);
    });

    //route to edit name
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params; //object in server
        module.name = newName; //persists as long as server is running
        res.json(module);
    });




};
