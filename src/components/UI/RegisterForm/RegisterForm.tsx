import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styled from "./RegisterForm.module.css";

interface RegisterFormProps {
  className?: string;
  mode: "singIn" | "singUp";
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  className = "",
  mode,
  ...rest
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  function isEmaiValid(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function LogIn(email: string, password: string) {
    const user = window.localStorage.getItem("User");
    if (user) {
      if (
        email === JSON.parse(user).email &&
        password === JSON.parse(user).password
      ) {
        window.localStorage.setItem(
          "User",
          JSON.stringify({ email: email, password: password, auth: true })
        );
      }
    }
  }

  function addUser(email: string, password: string) {
    const checkEmail = window.localStorage.getItem("User");
    if (checkEmail && JSON.parse(checkEmail).email === email) {
      setFormErrors((prevState) => ({
        ...prevState,
        email: "Email already registered",
      }));
    } else {
      window.localStorage.setItem(
        "User",
        JSON.stringify({ email: email, password: password, auth: true })
      );
    }
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.values(formErrors).every(
      (error) => error === ""
    );
    const [email, password] = Object.values(formData);
    if (isFormValid) {
      {
        mode === "singIn" && LogIn(email, password);
      }
      {
        mode === "singUp" && addUser(email, password);
      }
    } else {
      return;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (!value) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "required field",
      }));
    } else if (name === "email" && value.length > 0 && !isEmaiValid(value)) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "incorrect email",
      }));
    } else if (name === "password" && value.length <= 3) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "must be at least 3 characters long",
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <form
        className={`${styled.form} ${className}`}
        onSubmit={onSubmit}
        {...rest}
      >
        <h3>{mode === "singIn" ? "Sing In" : "Sing Up"}</h3>
        <label className={styled.label}>
          <Input
            type="mail"
            name="email"
            placeholder="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <span className={styled.form_error}>{formErrors.email}</span>
          )}
        </label>

        <label className={styled.label}>
          <Input
            type="password"
            name="password"
            placeholder="password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && (
            <span className={styled.form_error}>{formErrors.password}</span>
          )}
        </label>

        <Button mode="btn-violet" type="submit">
          Sign {`${mode === "singIn" ? "In" : "Up"}`} to Galary
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
