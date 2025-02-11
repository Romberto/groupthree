import React from 'react';
import styled from './SocialMediaList.module.css';
import { SocialMediaListProps } from '@/utils/types';

export const SocialMediaList: React.FC<SocialMediaListProps> = ({
  data,
  containerClass,
  itemClass,
}) => {
  return (
    <ul className={`${styled.soc__list} ${containerClass}`}>
      {data.map(item => (
        <li key={item.id}>
          <a href="#" className={`${styled.soc__link} ${itemClass}`}>
            <img src={item.img} className={styled.soc__img} />
          </a>
        </li>
      ))}
    </ul>
  );
};
