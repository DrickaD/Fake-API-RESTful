import { Router} from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookValid } from "../middlewares/isBookValid.middleware";
import { IsNameBookExisting } from "../middlewares/isNameBookExisting.middleware";
import { ValidateRequest } from "../middlewares/ValidateRequest.middleware";
import { BookBodyUpdateSchema, CreateBookSchema } from "../schemas/bookSchema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", ValidateRequest.execute({body: CreateBookSchema}), IsNameBookExisting.execute, booksControllers.createBook);

booksRouter.get("/", booksControllers.readingListBooks);

booksRouter.get("/:id", IsBookValid.execute, booksControllers.readingBook);

booksRouter.patch("/:id", ValidateRequest.execute({body: BookBodyUpdateSchema}), IsBookValid.execute, IsNameBookExisting.execute, booksControllers.updateBook);

booksRouter.delete("/:id", IsBookValid.execute, booksControllers.removeBooks);