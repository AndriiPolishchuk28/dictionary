import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IFormInputs, IProps } from "./Form.types";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import css from "./Form.module.scss";
import Container from "../Container/Container";
import { icons } from "../../assets";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

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

type field = "name" | "email" | "password";

const Form: FC<IProps> = ({ path, title }) => {
  const [validFields, setValidFields] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const location = useLocation();
  const modifyLocation = location.pathname.slice(1);

  const handleBlur = async (field: field) => {
    const result = await trigger(field);
    setValidFields((prevState) => ({
      ...prevState,
      [field]: result,
    }));
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className={css.bg_color}>
      <Container>
        <h3 className={css.title}>{title}</h3>
        <p className={css.subtitle}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrapper_inputs}>
            {modifyLocation === "register" && (
              <div className={css.input_wrapper}>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  {...register("name")}
                  name="name"
                  id="name"
                  className={clsx(
                    css.input,
                    errors.name && css.input_error_border
                  )}
                  placeholder="Name"
                  onBlur={() => handleBlur("name")}
                />
                {errors.name ? (
                  <div className={css.error_msg}>
                    <svg width={16} height={16} className={css.svg_error}>
                      <use href={`${icons}#icon-error`}></use>
                    </svg>
                    <span className={css.error}>{errors.name?.message}</span>
                  </div>
                ) : (
                  validFields.name && (
                    <div className={css.error_msg}>
                      <svg width={16} height={16} className={css.svg_success}>
                        <use href={`${icons}#icon-success`}></use>
                      </svg>
                      <span className={clsx(css.error, css.success_color)}>
                        Name success
                      </span>
                    </div>
                  )
                )}
              </div>
            )}

            <div>
              <label htmlFor="email"></label>
              <input
                className={clsx(
                  css.input,
                  errors.email && css.input_error_border
                )}
                type="email"
                {...register("email")}
                name="email"
                id="email"
                placeholder="Email"
                onBlur={() => handleBlur("email")}
              />
              {errors.email ? (
                <div className={css.error_msg}>
                  <svg width={16} height={16} className={css.svg_error}>
                    <use href={`${icons}#icon-error`}></use>
                  </svg>
                  <span className={css.error}>{errors.email?.message}</span>
                </div>
              ) : (
                validFields.email && (
                  <div className={css.error_msg}>
                    <svg width={16} height={16} className={css.svg_success}>
                      <use href={`${icons}#icon-success`}></use>
                    </svg>
                    <span className={clsx(css.error, css.success_color)}>
                      Email success
                    </span>
                  </div>
                )
              )}
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                className={clsx(
                  css.input,
                  errors.password && css.input_error_border
                )}
                type="text"
                {...register("password")}
                name="password"
                id="password"
                placeholder="Password"
                onBlur={() => handleBlur("password")}
              />
              {errors.password ? (
                <div className={css.error_msg}>
                  <svg width={16} height={16} className={css.svg_error}>
                    <use href={`${icons}#icon-error`}></use>
                  </svg>
                  <span className={css.error}>{errors.password?.message}</span>
                </div>
              ) : (
                validFields.password && (
                  <div className={css.error_msg}>
                    <svg width={16} height={16} className={css.svg_success}>
                      <use href={`${icons}#icon-success`}></use>
                    </svg>
                    <span className={clsx(css.error, css.success_color)}>
                      Password success
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <Button />
          <NavLink className={css.link} to={path}>
            {modifyLocation === "login" ? "Register" : "Login"}
          </NavLink>
        </form>
      </Container>
    </div>
  );
};

export default Form;
