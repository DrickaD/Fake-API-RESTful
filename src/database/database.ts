import {TBook } from "../interfaces/interfaces";

export let id = 0
export const booksDatabase: TBook[] = [];

export const generateId = () => {
    id++;
    return id;
}