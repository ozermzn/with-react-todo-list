import { useContext } from "react";
import BookContext from "../context/books";

const useBookContext = () => {
  return useContext(BookContext);
};

export default useBookContext;
