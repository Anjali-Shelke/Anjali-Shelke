import 'dotenv/config';
import app from './app.js';
import http from 'http';
import './services/reminderScheduler.service.js'; // Initialize reminder scheduler

// ✅ CREATE SERVER FIRST
const server = http.createServer(app);

// ✅ USE PORT FROM .env
const PORT = process.env.PORT || 5001;

// ✅ START SERVER
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
