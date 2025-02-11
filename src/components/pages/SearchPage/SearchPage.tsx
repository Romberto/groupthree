import { ArtworkList } from '@/components/UI/AtrworkList/ArtworkList';
import { SearchFilterForm } from '@/components/UI/SearchFilterForm/SearchFilterForm';
import React from 'react';
import styles from './SearchPage.module.css';

export const SearchPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <SearchFilterForm />
      </div>
      <ArtworkList />
    </div>
  );
};
