import { FC } from "react";
import css from "./Button.module.scss";
import { useLocation } from "react-router-dom";

const Button: FC = () => {
  const location = useLocation();
  const modifyLocation = location.pathname.slice(1);
  return (
    <div>
      <button className={css.btn} type="submit">
        {modifyLocation}
      </button>
    </div>
  );
};

export default Button;
