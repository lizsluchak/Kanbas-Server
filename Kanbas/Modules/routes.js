// import Database from "../Database/index.js"
import * as dao from "./dao.js";

 /**
   * R: Retrieve/Read Operation for Modules of Selected Course
   * 
   * Retrieves course id from passed :cid path parameter. The course
   * ID is parsed from the path and then used to filter modules and
   * return only requested courses modules. 
   * @param {*} app 
   */
  export default function ModuleRoutes(app) {

    const findAllModulesROUTE = async (req, res) => {
      const {courseId} = req.params; 
      const modules = await dao.findAllModulesDAO(courseId);
      console.log(modules);
      res.json(modules);
    };
    app.get("/api/modules/:courseId", findAllModulesROUTE);

  }

    
// //     app.get("/api/courses/:cid/modules", (req, res) => {
// //       const { cid } = req.params;
// //       const modules = Database.modules.filter((m) => m.course === cid);
// //       res.json(modules);
// //     }
// // );

// /**
//  * C: Create Operation for Modules
//  */
// app.post("/api/courses/:cid/modules", (req, res) => {
//     const { cid } = req.params;
//     const newModule = {
//       ...req.body,
//       course: cid,
//       _id: new Date().getTime().toString(),
//     };
//     Database.modules.push(newModule);
//     res.send(newModule);
//   });

// /**
//  * U: Update Operation for Modules
//  */
//   app.put("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     const moduleIndex = Database.modules.findIndex(
//       (m) => m._id === mid);
//     Database.modules[moduleIndex] = {
//       ...Database.modules[moduleIndex],
//       ...req.body
//     };
//     res.sendStatus(204);
//   });


//   /**
//    * D: DELETE Operation for Modules
//    * 
//    * Uses embdedded module ID
//    */
//   app.delete("/api/modules/:mid", (req, res) => {
//     const { mid } = req.params;
//     Database.modules = Database.modules.filter((m) => m._id !== mid);
//     res.sendStatus(200);
//   });



// }