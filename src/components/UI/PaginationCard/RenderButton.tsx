import { useEffect, useState } from 'react';
import styled from './PaginationCard.module.css';

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
    const makeButtonList = () => {
      const result: Array<{ index: number }> = [];
      if (total > 3) {
        if (currentButton === total - 2) {
          for (let i = currentButton; i < total + 1; i++) {
            const index = i;
            result.push({ index: index });
          }
        } else if (currentButton === total - 1) {
          for (let i = currentButton - 1; i < total + 1; i++) {
            const index = i;
            result.push({ index: index });
          }
        } else if (currentButton === total) {
          for (let i = currentButton - 2; i < total + 1; i++) {
            const index = i;
            result.push({ index: index });
          }
        } else {
          for (let i = 0; i < 3; i++) {
            const index = currentButton + i;
            result.push({ index: index });
          }
        }
      } else {
        for (let i = 1; i < total + 1; i++) {
          result.push({ index: i });
        }
      }
      return result;
    };
    useEffect(() => {
      setButtonList(makeButtonList());
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
  