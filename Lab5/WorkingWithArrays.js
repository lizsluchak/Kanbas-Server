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

    /**
     * starting to implement correct HTTP methods, post takes place of above, 
     * should use post to create new todos
     */
    app.post("/lab5/todos", (req, res) => {
        //grabs posted JSON data from req.body and uses it to define new todo
        const newTodo = { ...req.body,  id: new Date().getTime() };
        todos.push(newTodo);
        //this version only responds with new todo, not entire todo array
        res.json(newTodo);
      });
    
    
    

    /** route that parses id passed as path param,  finds item, responds with item */
    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    });


    /** 
     * route that parses id to delete, passed as path param, respond with all items, 
     * more comomon to respond with success/failure
     */
    app.get("/lab5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        todos.splice(todoIndex, 1); //start index; number of items to delete
        res.json(todos);
      });

      /**
       * Update Data in Arrays:
       * convention = encode ID of item to update as path param as shown below, 
       * we search for the item in the set of items and update it; typically
       * respond with status of success/failure but responding with all todos for now
       */
      app.get("/lab5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
      });

      /**
       * Update Data: completed
       * convention = encode ID of item to update as path param as shown below, 
       * we search for the item in the set of items and update it; typically
       * respond with status of success/failure but responding with all todos for now
       */
      app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
        const { id, completed } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.completed = completed;
        res.json(todos);
      });

      /**
       * Update Data: description
       * convention = encode ID of item to update as path param as shown below, 
       * we search for the item in the set of items and update it; typically
       * respond with status of success/failure but responding with all todos for now
       */
      app.get("/lab5/todos/:id/description/:description", (req, res) => {
        const { id, description } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.description = description;
        res.json(todos);
      });
    
    

};
