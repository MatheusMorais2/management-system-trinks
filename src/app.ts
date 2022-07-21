import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import cors from "cors";

import router from "./routers/index.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandlingMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
