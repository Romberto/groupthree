import React from 'react';
import styled from './FavoritesPage.module.css'
import { useAppSelector } from '@/app/hooks';

export const FavoritesPage: React.FC = () => {
    const favorites = useAppSelector((state)=>state.favoritesReducer.favorites)
  return (
    <div>
        {favorites.length !== 0 ? <h1>Hello</h1> : <h3>There are no artworks in your favorites section.</h3>
        }
    </div>
  );
};
