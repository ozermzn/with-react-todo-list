import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const handleCreateBook = async (title) => {
    if (title === "") {
      return;
    }
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    console.log(books);
  };
  const removeBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    console.log(response);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const valueToShare = {
    books,
    fetchBooks,
    handleCreateBook,
    removeBookById,
    editBookById,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export { Provider };
export default BookContext;
