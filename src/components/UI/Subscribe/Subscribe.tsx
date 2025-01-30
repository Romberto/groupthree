import { isEmaiValid } from "../../../utils/utils";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styled from "./Subscribe.module.css";
import React, { useState } from "react";

type SubscriblePropsType = {
  className?: string;
};

export const Subscribe: React.FC<SubscriblePropsType> = ({ className }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState({
    email: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    const isMailValid = isEmaiValid(value);
    if (!value) {
      setError((prevState) => ({
        ...prevState,
        [name]: "required field",
      }));
      setIsDisabled(true);
    } else if (!isMailValid) {
      setError((prevState) => ({
        ...prevState,
        [name]: "incorrect email",
      }));
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.values(error).every((error) => error === "");
    {
      isFormValid && console.log("отправляем запрос на сервер");
    }
  };
  const classSub = `${styled.subscribe} ${className ? className : ""}`;
  return (
    <div className={classSub}>
      <h3>Subscribe to our newsletter</h3>
      <form onSubmit={onSubmitHandler}>
        <label>
          <Input
            name="email"
            value={formData.email}
            className={styled.subscribe__form_input}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          {error.email && <span className={styled.error}>{error.email}</span>}
        </label>
        <Button
          type="submit"
          disabled={isDisabled}
          mode="btn-round-rigth"
          className={styled.subscribe__form_btn}
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Subscribe;
