import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onRemove, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleRemoveClick = () => {
    onRemove(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
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
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between ">
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
      </div>
    </div>
  );
};

export default BookShow;
