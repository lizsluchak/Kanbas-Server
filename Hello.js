


/**
 * Hello.js is an arrow function that handles HTTP requests for a hello greeting and responds with a
 * friendly reply. 
 * 
 * We pass app as a paramenter in a function we can import and invoke from
 * App.js 
 */
const Hello = (app) => {    //accepts app reference to express module

    app.get('/hello', (req, res) => {
        res.send('Life is good!');

    });

    //create route that says hello;
    //below, uses app.get() to configure an HTTP handler
    //by mapping the URL pattern '/hello' to a function that
    //handles an HTTP request
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!');

    });


};

export default Hello;


/**
 * 7/06/24
 */
// export default function Hello(app) { //accepts app reference to express module
//     app.get('/hello', (req,res) => {

// app.get('/hello', (req, res) => {res.send('Life is good!')}) 
//                                 //create route that says hello;
// 							    //below, uses app.get() to configure an HTTP handler
// 							    //by mapping the URL pattern '/hello' to a function that
// 							    //handles an HTTP request
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')

// })


// });
// }