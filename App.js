import "dotenv/config";
import mongoose from "mongoose"; //load mongoose library
import session from "express-session"; //import new server session library
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js" 
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING); //connect function via Mongoose Libary to connect to database server programatically 
const app = express();


app.use(cors({
    credentials: true, //support cookies
    origin: process.env.NETLIFY_URL || "http://localhost:3000", //restrict cross origin resource; use different url for dev vs production
  }
 ));
 app.use(express.json()); 
 
 //configure server sessions after cors
 const sessionOptions = { //default session config that works locally but would need to be tweaked for remote server
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") { //in production trun on proxy suuport & configure cookies for remote server
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  
  


UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app); 	
Hello(app);  //pass app reference to Hello function



app.listen(process.env.PORT || 4000)
