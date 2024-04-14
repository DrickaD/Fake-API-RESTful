import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";
import { ZodError } from "zod";

export class HandleErrors{
    static execute(error: Error, req: Request, res: Response, next: NextFunction){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({error: error.message});
        } 

        // if(error instanceof ZodError){
        //     return res.status(400).json(error);
        // } 
        
        else {
            console.log(error);
            return res.status(500).json({error: "Internal server error."});
        }
    }
}