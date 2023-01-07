import { useState } from "react";
import pin from "../img/pin.png";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleInput = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className="containers p-5 book-create-style">
      <div className="d-flex gap-3 mb-2">
        <img alt="pin" src={pin} className="img-pin" />
        <h2>What we make?</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <input
              onChange={handleInput}
              type={"text"}
              value={title}
              className="form-control"
              id="floatingInput"
              placeholder="Write here..."
            />

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              <i className="fa-regular fa-calendar-plus"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;
