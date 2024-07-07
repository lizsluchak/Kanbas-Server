/** array in js */
let todos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
];


export default function WorkingWithArrays(app) {
    /** route to retrieve array */
    app.get("/lab5/todos", (req, res) => {

        {/** handles case when we want to filter by completed query param */}
        const { completed } = req.query;
        if (completed !== undefined) {
            // === is strict equality operator, compares value and type of variables on both sides
            const completedBool = completed === "true";
            const completedTodos = todos.filter(
                (t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }
        res.json(todos);
    });

    /** 
     * route that creates a new item in the array and responds with the array now containing new item;
     * implemented before the /lab5/todos/:id route, otherwise the :id path param would interpret the
     * "create" in /lab5/todos/create as an ID
     * 
     * Note: new todo creates default values including a unique identifier field, id, based on timestamp. 
     * Eventually primary keys will be handled by a database later in the course. 
     * 
     * Response = entire todos array, which is convenient for us now, but more common implementation
     * would be to respond with newTodo
     */
    app.get("/lab5/todos/create", (req, res) => {
        const newTodo = {
          id: new Date().getTime(),
          title: "New Task",
          completed: false,
        };
        todos.push(newTodo);
        res.json(todos);
      });
    

    /** route that parses id passed as path param,  finds item, responds with item */
    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    });

};
