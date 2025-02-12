import React, { useState } from 'react';
import styles from './ArtworkCard.module.css';
import detailArrow from '@/assets/details-arrow.svg';
import styled from '../Tooltip/Tooltip.module.css';
import { ArtworkCardProps } from '@/utils/types';
import { BASE_IMAGE_URL, DEFAULTIMAGE } from '@/utils/constants';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Tooltip } from '../Tooltip/Tooltip';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  addToFavorites,
  removeToFavorites,
} from '@/components/pages/FavoritesPage/FavoritesPage.slice';
import { selectIsUser } from '@/utils/selectors';

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  id,
  title,
  artist,
  date,
  imageId,
  isFavorites,
}) => {
  const isUser = useAppSelector(selectIsUser);
  const imageUrl = imageId
    ? `${BASE_IMAGE_URL}/${imageId}/full/400,/0/default.jpg`
    : DEFAULTIMAGE;
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isExistToFavotitas, setIsExistToFavotitas] = useState(isFavorites);
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
  const handleClickFavoritas = () => {
    if (isUser) {
      toggleFavoritas(id);
    }
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {isUser ? (
          <>
            {!isExistToFavotitas ? (
              <FaRegBookmark
                className={styles.favorite_icon}
                onClick={handleClickFavoritas}
              />
            ) : (
              <FaBookmark
                className={styles.favorite_icon}
                onClick={handleClickFavoritas}
              />
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
      </div>
      <p className={styles.artist}>Artist: {artist}</p>
      <p className={styles.date}>Date: {date}</p>
      <a className={styles.link} href="#">
        See details
        <img src={detailArrow} alt="details" />
      </a>
    </div>
  );
};
