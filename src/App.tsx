import { books } from "./data/books";
import type { Book } from "./types/types";
import Container from "./components/Container";
import Table from "./components/Table";
import { useState } from "react";

const App = () => {
  const data: Book[] = [...books];
  const [search, setSearch] = useState<{ by: keyof Book; text: string }>({
    by: "title",
    text: "",
  });

  const filterBooks = (filterText: string, searchBy: keyof Book) => {
    return data.filter((book) =>
      book[searchBy].toLowerCase().includes(filterText)
    );
  };

  const [filteredBooks, setFilteredBooks] = useState(data);

  return (
    <>
      <Container>
        <input
          name="search-bar"
          type="text"
          onChange={(e) => {
            setSearch((prev) => ({ ...prev, text: e.target.value }));
            setFilteredBooks(
              filterBooks(e.target.value, search.by as keyof Book)
            );
          }}
        />
        <select
          name="search-by"
          onChange={(e) => {
            setSearch((prev) => ({
              ...prev,
              by: e.target.value as keyof Book,
            }));
            setFilteredBooks(
              filterBooks(search.text, e.target.value as keyof Book)
            );
          }}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="year">Year</option>
        </select>
        <Table
          className="table"
          title="Books Collection"
          headings={["Title", "Author", "Year"]}
          data={filteredBooks}
        />
      </Container>
    </>
  );
};

export default App;
