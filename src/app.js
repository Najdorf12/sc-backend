import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import noticiaRoutes from "./routes/noticias.routes.js";
import teamRoutes from "./routes/teams.routes.js";
import playerRoutes from "./routes/players.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/sc/auth", authRoutes);
app.use("/sc/", noticiaRoutes);
app.use("/sc/", teamRoutes);
app.use("/sc/", playerRoutes);

export default app;
