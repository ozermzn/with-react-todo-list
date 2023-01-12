import BookCreate from "./book-components/BookCreate";
import BookList from "./book-components/BookList";
import { useEffect } from "react";
import useBookContext from "./hooks/use-books-context";

const App = () => {
  const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <div>
        <BookCreate />
      </div>

      <div className="book-lists">
        <BookList />
      </div>
    </div>
  );
};

export default App;
