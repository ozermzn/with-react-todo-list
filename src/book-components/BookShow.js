import { useState } from "react";
import useBookContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";
import pin from "../img/pin-dynamic-clay.png";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { removeBookById } = useBookContext();

  const handleRemoveClick = () => {
    removeBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };
  const content = () => {
    let content = <h5>{book.title}</h5>;
    if (showEdit) {
      return (content = <BookEdit onSubmit={handleSubmit} book={book} />);
    }
    return content;
  };
  return (
    <div className="container-sm">
      <div className="card mb-3 rounded">
        <div className="card-body d-flex justify-content-between rounded">
          <div className="card-text">{content()}</div>
          <div className="d-flex gap-3 button-flex">
            <button
              className="btn btn-warning text-white"
              onClick={handleEditClick}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger" onClick={handleRemoveClick}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
        <span
          id="card-pin"
          className=" position-absolute top-0 start-0 translate-middle badge "
        >
          <img src={pin} className="img-fluid" />
        </span>
      </div>
    </div>
  );
};

export default BookShow;
