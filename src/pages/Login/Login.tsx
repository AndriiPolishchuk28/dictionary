import { FC } from "react";
import css from "./Login.module.scss";
import { illustration1x } from "../../assets";
import { illustration2x } from "../../assets";
import Form from "../../components/Form/Form";

const Login: FC = () => {
  return (
    <div className={css.wrapper}>
      <img
        srcSet={`${illustration1x} 1x, ${illustration2x} 2x`}
        src={illustration1x}
        alt="photo girl and boy"
        className={css.img}
      />
      <Form title="Login" path="/register" />
    </div>
  );
};

export default Login;
