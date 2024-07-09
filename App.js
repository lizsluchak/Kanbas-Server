/**
 * before turning configuring node.js to use ES6, which has been supported since
 * node version 12 we had to use require, now that we configured node.js to
 * use ES6 by editing the package.json to include type: "module", and "start"
 * node App.js; we can use traditional import statements like in react app
 */
// const express = require('express') //require == import, and loads a library into local source


import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js" //import lab5
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

const app = express();
//cors = library to configure how various resources can interact across diff origins
//currently cors allows all requests from any origin 
app.use(cors());
/**
 * prior: 
 * The exercises so far have sent data to the server as path and query 
 * parameters. This approach is limited to the maximum length of the URL string, 
 * and only string data types. Another concern is that data in the URL is sent 
 * over a network in clear text, so anyone snooping around between the client 
 * and server can see the data as plain text which is not a good option for 
 * exchanging sensitive information such as passwords and other personal data. 
 * A better approach is to encode the data as JSON in the HTTP request body 
 * which allows for arbitrarily large amounts of data as well as secure data 
 * encryption. To enable the server to parse JSON data from the request body, 
 * add the following app.use() statement in App.js. Make sure that it's 
 * implemented right after the CORS configuration statement.
 * 
 * now: json data from client is available in request body via request.body 
 * property in server routes
 */
app.use(express.json());
//import new routes and pass reference, must be after cors and json statements
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app); 	
// app.use(express.json()); //create new express library instance and assigns it to app
Hello(app);  //pass app reference to Hello function



app.listen(process.env.PORT || 4000)
