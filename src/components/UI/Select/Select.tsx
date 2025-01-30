import React, { useState } from "react";
import styled from "./Select.module.css";
import { SelectPropsType } from "../../../utils/types";



export const Select: React.FC<SelectPropsType> = ({ options }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(options[0]);

  const onClickSelectHandler = () => {
    setIsVisible(!isVisible);
  };

  const onClickLangHandler = (e: React.MouseEvent<HTMLElement>) => {
    const newValue = e.currentTarget.textContent;
    if (newValue) {
      setSelected(newValue);
      setIsVisible(!isVisible);
    } else {
      console.error("textContent is null");
    }
  };
  return (
    <div className={styled.select}>
      <div className={styled.select_box} onClick={onClickSelectHandler}>
        <span className={styled.selected_option}>{selected}</span>
      </div>
      {isVisible && (
        <ul className={`${styled.list_options}`}>
          {options.map((item, index) => (
            <li key={index} onClick={onClickLangHandler}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
