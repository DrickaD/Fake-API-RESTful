import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/appError";

export class IsBookValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const currentBook = booksDatabase.find(book => book.id === Number(req.params.id))
        if(!currentBook){
            throw new AppError(404, "Book not found." )
        }
        res.locals.books = currentBook
        return next();
    }
}