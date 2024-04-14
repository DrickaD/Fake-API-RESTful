import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { HandleErrors } from "./error/handleErrors.middlewarw";
import "express-async-errors";
import helmet from "helmet";


export const app = express();

app.use(helmet());
app.use(json());
app.use("/books", booksRouter);
app.use(HandleErrors.execute);
