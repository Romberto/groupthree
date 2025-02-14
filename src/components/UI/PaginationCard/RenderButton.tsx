import { useEffect, useState } from 'react';
import styled from './PaginationCard.module.css';
import { makeButtonList } from '@/utils/utils';

export type RenderButtonProps = {
  total: number;
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
  currentButton: number;
};
export const RenderButton: React.FC<RenderButtonProps> = ({
  total,
  onClick,
  currentButton = 1,
}) => {
  const [buttonList, setButtonList] = useState<Array<{ index: number }>>([]);

  useEffect(() => {
    setButtonList(makeButtonList(total, currentButton));
  }, [currentButton]);

  return (
    <>
      <ul className={styled.button_list}>
        {buttonList.map(item => (
          <li key={item.index}>
            <span
              className={`${styled.btn} ${currentButton === item.index && styled.active}`}
              data-page={item.index}
              onClick={onClick}
            >
              {item.index}
            </span>
          </li>
        ))}
      </ul>
      {total > 3 &&
        currentButton !== total - 1 &&
        currentButton !== total &&
        currentButton !== total - 2 && (
          <span className={styled.total_block}>
            <p>...</p>
            <span
              className={`${styled.btn} ${currentButton === total && styled.active}`}
              data-page={total}
              onClick={onClick}
            >
              {total}
            </span>
          </span>
        )}
    </>
  );
};
