import { FC, MouseEvent } from 'react';
import { RegisterForm } from '../../UI/RegisterForm/RegisterForm';
import { AuthPageProps } from '../../../utils/types';
import styled from '@/components/pages/AuthPage/AuthPage.module.css';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import { PATH } from '@/utils/constants';

export const AuthPage: FC<AuthPageProps> = ({ mode }) => {
  const portalRoot = document.getElementById('form-root');
  const navigate = useNavigate();

  const handleModulClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      navigate(PATH.HOME);
    }
  };
  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styled.modal_overlay} onClick={handleModulClick}>
      <RegisterForm mode={mode} />
    </div>,
    portalRoot,
  );
};
