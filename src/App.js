import BookCreate from "./book-components/BookCreate";
import BookList from "./book-components/BookList";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Hi there ! ",
    },
  ]);
  const handleCreateBook = (title) => {
    if (title === "") {
      return;
    }
    const updatedBooks = [
      { id: Math.round(Math.random() * 100), title },
      ...books,
    ];
    setBooks(updatedBooks);
    console.log(books);
  };
  const removeBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <div>
        <BookCreate onCreate={handleCreateBook} />
      </div>

      <div className="book-lists">
        <BookList
          books={books}
          onRemove={removeBookById}
          onEdit={editBookById}
        />
      </div>
    </div>
  );
};

export default App;
