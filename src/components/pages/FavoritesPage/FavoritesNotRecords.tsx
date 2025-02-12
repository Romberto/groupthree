import React from "react";
import styled from "./FavoritesNotRecords.module.css";

export const FavoritesNotRecords: React.FC = () => {
  return (
    <div className={styled.message}>
      <p>There are no artworks in your favorites section.</p>
    </div>
  );
};
