import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IFormInputs } from "./Form.types";
import css from "./Form.module.scss";
import Container from "../Container/Container";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Password must be exactly 7 characters long, contain at least 6 alphabetic characters, and at least 1 digit"
    ),
});

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className={css.bg_color}>
      <Container>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.input_wrapper}>
            <label htmlFor="name"></label>
            <input
              type="text"
              {...register("name")}
              name="name"
              id="name"
              className={css.input}
            />
            {errors.name && <span>{errors.name?.message}</span>}
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              className={css.input}
              type="email"
              {...register("email")}
              name="email"
              id="email"
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              className={css.input}
              type="text"
              {...register("password")}
              name="password"
              id="password"
            />
            {errors.password && <span>{errors.password?.message}</span>}
          </div>

          <button type="submit">Register</button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
