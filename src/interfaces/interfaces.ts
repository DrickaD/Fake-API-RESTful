import { BookBodyUpdateSchema, BookSchema, CreateBookSchema } from './../schemas/bookSchema';
import { z } from 'zod';

export type TBook = z.infer<typeof BookSchema>;
export type TCreateBook = z.infer<typeof CreateBookSchema>
export type TUpdateBook = z.infer<typeof BookBodyUpdateSchema>

