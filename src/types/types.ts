import type { ReactNode } from "react";

export type Book = {
  title: string;
  year: string;
  author: string;
};

export type ChildComponentsProps = {
  children: ReactNode;
};

export type TableProps<T> = {
  headings: string[];
  title?: string;
  data: T[];
};

export type RowProps = { cells: string[]; className?: string };
