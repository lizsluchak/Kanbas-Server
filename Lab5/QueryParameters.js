export default function QueryParameters(app) {

    // e.g., lab5/calculator?a=5&b=2&operation=add
    app.get("/lab5/calculator", (req, res) => {

      const { a, b, operation } = req.query; // retrieve a, b, and operation parameters in query
      let result = 0;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b); //parse int again
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
        case "divide":
            result = parseInt(a) / parseInt(b);
            break;

        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }
  