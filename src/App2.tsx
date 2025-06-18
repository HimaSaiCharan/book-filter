import { books } from "./data/books";
import type { Book } from "./types/types";
import Container from "./components/Container";
import Table from "./components/Table";
import { useReducer, type ChangeEvent } from "react";
import SearchPanel from "./components/SearchPanel";

const filterData = (
  data: Book[],
  selectBy: keyof Book,
  filterBy: string
): Book[] =>
  data.filter((book) =>
    book[selectBy].toLowerCase().includes(filterBy.toLowerCase())
  );

type State = {
  by: keyof Book;
  text: string;
  books: Book[];
  filteredBooks: Book[];
};

type Action =
  | { type: "update-by"; value: string }
  | { type: "update-text"; value: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "update-by":
      return {
        ...state,
        by: action.value as keyof Book,
        filteredBooks: filterData(
          state.books,
          action.value as keyof Book,
          state.text
        ),
      };
    case "update-text":
      return {
        ...state,
        text: action.value,
        filteredBooks: filterData(state.books, state.by, action.value),
      };

    default:
      return state;
  }
};

const App2 = () => {
  const data: Book[] = [...books];
  const [state, dispatch] = useReducer(reducer, {
    by: "title",
    text: "",
    books: data,
    filteredBooks: data,
  });

  return (
    <Container>
      <SearchPanel
        inputValue={state.text}
        selectedValue={state.by}
        title="Search Books"
        onInputChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: "update-text", value: e.target.value });
        }}
        onOptionChange={(e: ChangeEvent<HTMLSelectElement>) => {
          dispatch({ type: "update-by", value: e.target.value });
        }}
      />
      <Table
        title="Books Collection"
        headings={["Title", "Author", "Year"]}
        data={state.filteredBooks}
      />
    </Container>
  );
};

export default App2;
