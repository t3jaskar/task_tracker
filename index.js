const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

// Connect to MongoDB
connectDB();

// Start the CLI application
taskRoutes();
