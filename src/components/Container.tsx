import type { ChildComponentsProps } from "../types/types";
import "../styles/container.css";

const Container = ({ children }: ChildComponentsProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
