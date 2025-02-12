import styles from './Button.module.css';
import { ButtonProps } from '@/utils/types';

export const Button: React.FC<ButtonProps> = ({
  children,
  mode,
  className,
  ...rest
}) => {
  const btnClass = `${
    mode === 'btn-violet'
      ? styles.btn_violet
      : mode === 'btn-white'
        ? styles.btn_white
        : styles.btn_round_right
  } ${className ? className : ''}`;
  return (
    <button {...rest} className={btnClass}>
      {children}
    </button>
  );
};
