import Database from "../Database/index.js"
 /**
   * R: Retrieve/Read Operation for Modules of Selected Course
   * 
   * Retrieves course id from passed :cid path parameter. The course
   * ID is parsed from the path and then used to filter modules and
   * return only requested courses modules. 
   * @param {*} app 
   */
  export default function ModuleRoutes(app) {
    app.get("/api/courses/:cid/modules", (req, res) => {
      const { cid } = req.params;
      const modules = Database.modules.filter((m) => m.course === cid);
      res.json(modules);
    }

);

/**
 * C: Create Operation for Modules
 */
app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    Database.modules.push(newModule);
    res.send(newModule);
  });


}