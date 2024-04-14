import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";
import { TUpdateBook} from "../interfaces/interfaces";

export class BooksControllers{

    createBook(req: Request, res: Response): Response{
        const bookServices = new BooksServices();
        const data = req.body
        const response = bookServices.createBook(data);
        return res.status(201).json(response);
    }

    readingListBooks(req: Request, res: Response): Response{
        const bookServices = new BooksServices();
        const search = req.query.search;
        const response = bookServices.readingListBooks(search as string);
        return res.status(200).json(response);
    }

    readingBook(req: Request, res: Response): Response{
        const bookServices = new BooksServices();
        const response = bookServices.readingBook(res.locals.books);
        return res.status(200).json(response);
    }

    updateBook(req: Request, res: Response): Response{
        const bookServices = new BooksServices();
        const data: TUpdateBook = req.body
        const response = bookServices.updateBook(res.locals.books, data);
        return res.status(200).json(response);
    }

    removeBooks(req: Request, res: Response): Response{
        const bookServices = new BooksServices();
        const response = bookServices.removeBooks(res.locals.books);
        return res.status(200).json(response);
    }
}