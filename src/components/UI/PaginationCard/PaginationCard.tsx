import React, { useState } from 'react';
import styled from './PaginationCard.module.css';
import prev from '@/assets/arrowLeft.svg';
import next from '@/assets/arrowRigth.svg';
import { RenderButton } from './RenderButton';

export type PaginationCardProps = {
  total: number;
  onChange: (page: number) => void;
};

export const PaginationCard: React.FC<PaginationCardProps> = ({
  total,
  onChange,
}) => {
  const [currentButton, setCurrentButton] = useState(1);
  const handleClickPrev = () => {
    if (currentButton !== 1) {
      const newPage = currentButton - 1
      setCurrentButton(newPage);
      onChange(newPage);
    }
  };
  const handleClickNext = () => {
    if (currentButton !== total) {
      const newPage = currentButton + 1
      setCurrentButton(newPage);
      onChange(newPage);
    }
  };
  const handleClickPage = (e: React.MouseEvent<HTMLSpanElement>) => {
    const currentTarget = e.currentTarget;
    if (currentTarget) {
      const page = currentTarget.getAttribute('data-page');
      if (page && +page <= total) {
        const newPage = +page
        setCurrentButton(newPage);
        onChange(newPage);
      }
    }
  };

  return (
    <div className={styled.wrapper}>
      <div className={styled.pagination}>
        {total > 3 && (
          <span
            className={`${styled.btn} ${currentButton === 1 && styled.desabled}`}
            onClick={handleClickPrev}
          >
            <img src={prev} alt="prev" />
          </span>
        )}

        <RenderButton
          total={total}
          onClick={handleClickPage}
          currentButton={currentButton}
        />
        {total > 3 && (
          <span
            className={`${styled.btn} ${currentButton === total && styled.desabled}`}
            onClick={handleClickNext}
          >
            <img src={next} alt="next" />
          </span>
        )}
      </div>
    </div>
  );
};
