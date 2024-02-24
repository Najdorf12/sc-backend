import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import noticiaRoutes from "./routes/noticias.routes.js" 

const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser());

app.use("/sc/auth", authRoutes);
app.use("/sc/", noticiaRoutes)

export default app;
