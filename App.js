import mongoose from "mongoose"; //load mongoose library
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js" 
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";


const CONNECTION_STRING = "mongodb://127.0.0.1:27017/kanbas" //currently local host
mongoose.connect(CONNECTION_STRING); //connect function via Mongoose Libary to connect to database server programatically 
const app = express();

app.use(cors());
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app); 	
Hello(app);  //pass app reference to Hello function



app.listen(process.env.PORT || 4000)
