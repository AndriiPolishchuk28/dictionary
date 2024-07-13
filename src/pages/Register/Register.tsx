import { FC } from "react";
import Form from "../../components/Form/Form";
import { illustration1x } from "../../assets";
import { illustration2x } from "../../assets";
import css from "./Register.module.scss";

const Register: FC = () => {
  return (
    <div className={css.wrapper}>
      <img
        srcSet={`${illustration1x} 1x, ${illustration2x} 2x`}
        src={illustration1x}
        alt="photo girl and boy"
        className={css.img}
      />
      <Form />
    </div>
  );
};

export default Register;
