import React, { useState } from "react";
import styles from "./ArtworkCard.module.css";
import styled from "../Tooltip/Tooltip.module.css";
import { ArtworkCardProps } from "@/utils/types";
import { BASE_IMAGE_URL, DEFAULTIMAGE} from "@/utils/constants";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Tooltip } from "../Tooltip/Tooltip";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addToFavorites,
  removeToFavorites,
} from "@/components/pages/FavoritesPage/FavoritesPage.slice";

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  id,
  title,
  artist,
  date,
  imageId,
  isFavorites
}) => {

  const imageUrl = imageId
    ? `${BASE_IMAGE_URL}/${imageId}/full/400,/0/default.jpg`
    : DEFAULTIMAGE;
  
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isExistToFavotitas, setIsExistToFavotitas] = useState(isFavorites);
  const isUser = useAppSelector((state) => state.authReducer.auth);
  const dispatch = useAppDispatch();
  const handleMouseEnter: React.MouseEventHandler<SVGElement> = () => {
    if (!isUser) {
      setIsShowTooltip(true);
    }
  };
  const handleMouseLeave: React.MouseEventHandler<SVGElement> = () => {
    setIsShowTooltip(false);
  };
  const toggleFavoritas = (element: number) => {
    if (isExistToFavotitas) {
      dispatch(removeToFavorites(element));
      setIsExistToFavotitas(false);
    } else {
      dispatch(addToFavorites(element));
      setIsExistToFavotitas(true);
    }
  };
  const handleClickFavoritas = (id: number) => {
    if (isUser) {
      toggleFavoritas(id);
    }
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.block}>
        {isUser ? (
          <>
            {!isExistToFavotitas ? (
              <FaRegBookmark
                className={styles.favorite_icon}
                onClick={() => handleClickFavoritas(id)}
              />
            ) : (
              <>
                <FaBookmark
                  className={styles.favorite_icon}
                  onClick={() => handleClickFavoritas(id)}
                />
              </>
            )}
          </>
        ) : (
          <>
            <FaRegBookmark
              className={styles.favorite_icon}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <Tooltip className={`${isShowTooltip && styled.show}`} />
          </>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>{artist}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
