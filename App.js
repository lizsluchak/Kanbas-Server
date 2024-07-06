/**
 * before turning configuring node.js to use ES6, which has been supported since
 * node version 12 we had to use require, now that we configured node.js to
 * use ES6 by editing the package.json to include type: "module", and "start"
 * node App.js; we can use traditional import statements like in react app
 */
// const express = require('express') //require == import, and loads a library into local source

import express from 'express'; 
import Hello from "./Hello.js";

const app = express() //create new express library instance and assigns it to app
Hello(app)  //pass app reference to Hello function 


app.listen(4000)
