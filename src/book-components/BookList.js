import BookShow from "./BookShow";

const BookList = ({ books, onRemove, onEdit }) => {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onRemove={onRemove} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
