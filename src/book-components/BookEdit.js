import { useState } from "react";
import useBookContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState("");
  const { editBookById } = useBookContext();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 position-relative">
          <input
            className="shadow form-control"
            onChange={handleChange}
            value={title}
            type={"text"}
            id="floatingInput"
            placeholder="title"
          />
          <label htmlFor="floatingInput">{book.title}</label>
          <span
            className="edit-span-button position-absolute top-100 start-100 translate-middle badge rounded-pill bg-success "
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-check"></i>
          </span>
        </div>
     
      </form>
    </div>
  );
};

export default BookEdit;
