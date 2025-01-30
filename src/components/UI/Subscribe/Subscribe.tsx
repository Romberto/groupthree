import { isEmaiValid } from "../../../utils/utils";
import Button from "../Button/Button";
import {Input} from "../Input/Input";
import styled from "./Subscribe.module.css";
import React, { useState } from "react";

type SubscriblePropsType = {
    className?:string,
}

export const Subscribe:React.FC<SubscriblePropsType>  = ({className}) => {
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
    } else if (!isMailValid) {
      setError((prevState) => ({
        ...prevState,
        [name]: "incorrect email",
      }));
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
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
