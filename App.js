import "dotenv/config";
import mongoose from "mongoose"; // Load mongoose library
import session from "express-session"; // Import express-session library
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";

// Connect to MongoDB
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

const app = express();

// CORS configuration
app.use(cors({
    credentials: true, // Support cookies
    origin: process.env.NETLIFY_URL || "http://localhost:3000", // Use different URL for dev vs production
}));

app.use(express.json());

// Configure server sessions after CORS
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "default_secret", // Use environment variable for secret
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true, // Ensure HTTPS is used
        domain: process.env.NODE_SERVER_DOMAIN || "kanbas-server-a5part2.onrender.com",
    };
}

app.use(session(sessionOptions));

// Middleware to log session data for debugging
app.use((req, res, next) => {
    console.log('Session ID:', req.sessionID);
    console.log('Session Data:', req.session);
    next();
});

// Load routes
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app); // Pass app reference to Hello function

// Start server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port ${process.env.PORT || 4000}`);
});
