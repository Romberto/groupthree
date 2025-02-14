import React from 'react';
import styles from './ArtworkList.module.css';
import { ArtworkCard } from './ArtworkCard';
import { useAppSelector } from '@/app/hooks';
import { selectFavoritesIds } from '@/utils/selectors';
import {  ArtworkFullType } from '@/utils/types';

export const ArtworkList: React.FC<{ data: ArtworkFullType[] }> = ({
  data,
}) => { 
  const favorites = useAppSelector(selectFavoritesIds);
  const isExistInFavoritas = (id: number): boolean => {
    if (favorites.includes(id)) {
      return true;
    }
    return false;
  };
  return (
    <div className={styles.grid}>
      {data.map(art => (
        <ArtworkCard
          key={art.id}
          id={art.id}
          title={art.title}
          artist={art.artist_display}
          date={art.date_display}
          imageId={art.image_id}
          isFavorites={isExistInFavoritas(art.id)}
        />
      ))}
    </div>
  );
};
