import { z } from "zod";

export const BookSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
});

export const CreateBookSchema = BookSchema.omit({id: true, createdAt: true, updatedAt: true});

export const BookBodyUpdateSchema = BookSchema.omit({id: true, createdAt: true, updatedAt: true}).partial();
