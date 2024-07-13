import { FC, ReactNode } from "react";
import css from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
