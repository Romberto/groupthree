import React from "react";
import styles from "./FilterButton.module.css";
import { FilterButtonProps } from "../../../utils/types";


export const FilterButton: React.FC<FilterButtonProps> = ({ label, isOpen, onClick, children }) => {
  return (
    <div className={styles.filterContainer}>
      <button className={`${styles.filterButton} ${isOpen ? styles.active : ""}`} onClick={onClick}>
        <span className={styles.label}>{label}</span>
      </button>
      {isOpen && <div className={styles.filterList}>{children}</div>}
    </div>
  );
};
