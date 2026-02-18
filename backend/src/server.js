// ...existing code...
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// load the .env located next to this file (src/.env)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// now import runtime libs
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// ...existing code...

// dynamically import modules that read ENV so dotenv has already run
const authModule = await import("./routes/auth.route.js");
const messageModule = await import("./routes/message.route.js");
const dbModule = await import("./lib/db.js");
const envModule = await import("./lib/env.js");
const socketModule = await import("./lib/socket.js");

const authRoutes = authModule.default || authModule;
const messageRoutes = messageModule.default || messageModule;
const { connectDB } = dbModule;
const { ENV } = envModule;
const { app, server } = socketModule;

// ...existing code...
const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
// ...existing code...

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});