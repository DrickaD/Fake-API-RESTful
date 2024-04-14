import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/appError";

export class IsNameBookExisting{
    static execute(req: Request, res: Response, next: NextFunction){
        if(booksDatabase.some(book => book.name === req.body.name)){
            throw new AppError(409, "Book already registered." )
        } else{
            return next();
        }
    }
}