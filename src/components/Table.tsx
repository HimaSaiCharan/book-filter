import type { Book, TableProps } from "../types/types";
import Row from "./Row";
import "../styles/table.css";

const Table = ({ data, title, headings }: TableProps<Book>) => {
  return (
    <div className="table">
      <h3>{title}</h3>
      <Row cells={headings} className="table-header" />
      {data.length === 0 ? (
        <p>No books found.</p>
      ) : (
        data.map(({ title, author, year }) => (
          <Row
            key={`${title}-${author}-${year}`}
            cells={[title, author, year]}
          />
        ))
      )}
    </div>
  );
};

export default Table;
