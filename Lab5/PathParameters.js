export default function PathParameters(app) {
    
    //add path params
    app.get("/lab5/add/:a/:b", //route expects 2 path parameters after /lab5/add
        (req, res) => {
      const { a, b } = req.params; //retrieve path params as strings
      const sum = parseInt(a) + parseInt(b); //parse to int and add
      res.send(sum.toString()); //convert string to sum and return it back - DONT sent int because can be interpreted as status
    });

    //subtract path parmas
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) - parseInt(b);
      res.send(sum.toString());
    });

    //multiply path parmas
    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) * parseInt(b);
        res.send(sum.toString());
      });

    //divide path parmas
    app.get("/lab5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) / parseInt(b);
        res.send(sum.toString());
      });






  };
  