/**The Link component is used to create the hyperlinks and encode the course's ID as part of  the path. This can then be used in other components to parse the ID from the path and display content specific to the selected course. Confirm that clicking on different courses encodes the corresponding course ID in the path. Refactor the courses.json and the Dashboard component so that each course has a different image. */
import courses from "./courses.js";
import modules from "./modules.js";
import assignments from "./assignments.js";
import users from "./users.js";
import enrollments from "./enrollments.js";
import grades from "./grades.js";
export {  courses, modules, assignments, users, enrollments, grades };