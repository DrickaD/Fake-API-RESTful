import { booksDatabase, generateId } from "../database/database";
import { TBook, TCreateBook, TUpdateBook} from "../interfaces/interfaces";

export class BooksServices{

    createBook(data: TCreateBook) :TBook{
        const date = new Date();
        const newBook: TBook = {
            ...data,
            id: generateId(),
            createdAt: date,
            updatedAt: date,
        }  
        booksDatabase.push(newBook);
        return newBook as TBook; 
    }

    readingListBooks(search?: string) :TBook[]{
        if(search){
            const searchResults = booksDatabase.filter((book)=> 
            book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

            return searchResults
        };

        return booksDatabase as TBook[];
    }

    readingBook(currentBook: TBook){
        if(currentBook){
            return currentBook as TBook;
        } 
    }

    updateBook(currentBook: TBook, data: TUpdateBook){
        if(currentBook){
            const index = booksDatabase.findIndex(book =>  book.id === Number(currentBook.id));
            const updateDate = new Date();
            const updateBook = {...currentBook,...data, updatedAt: updateDate};
            booksDatabase.splice(index, 1, updateBook);
            return updateBook as TBook;
        } 
    }

    removeBooks(currentBook: TBook){
        const index = booksDatabase.findIndex( book =>  book.id === Number(currentBook.id));
        booksDatabase.splice(index, 1);
    }
}