import "../styles/row.css";
import type { RowProps } from "../types/types";

const Row = ({ cells, className }: RowProps) => {
  return (
    <div className={`row ${className ?? ""}`}>
      {cells.map((content) => (
        <span className="cell" key={`${className}-${content}`}>
          {content}
        </span>
      ))}
    </div>
  );
};

export default Row;
