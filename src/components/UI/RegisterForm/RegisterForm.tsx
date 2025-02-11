import React, { FormEvent, useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styled from './RegisterForm.module.css';
import { addUser, EmailAlreadyEx, isEmaiValid, LogIn } from '@/utils/utils';
import { RegisterFormProps } from '@/utils/types';
import { useNavigate } from 'react-router';
import { PATH } from '@/utils/constants';
import { useAppDispatch } from '@/app/hooks';
import {
  userAuthenticatedAction,
  userRegisterAction,
} from '@/components/pages/AuthPage/AuthSlice';

export const RegisterForm: React.FC<RegisterFormProps> = ({
  className,
  mode,
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    form: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = Object.values(formErrors).every(error => error === '');
    if (isFormValid) {
      const [email, password] = Object.values(formData);
      if (mode === 'singIn') {
        const isAuth = LogIn(email, password);
        if (!isAuth) {
          setFormErrors(prevState => ({
            ...prevState,
            form: 'Invalid email or password',
          }));
        } else {
          dispatch(
            userAuthenticatedAction({ email: email, password: password }),
          );
          navigate(PATH.HOME);
        }
      } else {
        const isMailEx = EmailAlreadyEx(email);
        if (!isMailEx) {
          dispatch(userRegisterAction({ email: email, password: password }));
          navigate(PATH.HOME);
        } else {
          setFormErrors(prevState => ({
            ...prevState,
            form: 'Email already registered',
          }));
        }
      }
    } else {
      return;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors(prevState => ({
      ...prevState,
      email: '',
      password: '',
      form: '',
    }));

    if (!value) {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: 'required field',
      }));
    } else if (name === 'email' && value.length > 0 && !isEmaiValid(value)) {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: 'incorrect email',
      }));
    } else if (name === 'password' && value.length <= 3) {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: 'must be at least 3 characters long',
      }));
    } else {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: '',
      }));
    }
  };
  const formClass = `${styled.form} ${className ? className : ''}`;
  return (
    <form className={formClass} onSubmit={onSubmit} {...rest}>
      <h3>{mode === 'singIn' ? 'Sing In' : 'Sing Up'}</h3>
      <label className={styled.label}>
        <Input
          type="mail"
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className={styled.form_error}>{formErrors.email}</span>
        )}
      </label>

      <label className={styled.label}>
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <span className={styled.form_error}>{formErrors.password}</span>
        )}
      </label>

      <Button mode="btn-violet" type="submit">
        Sign {`${mode === 'singIn' ? 'In' : 'Up'}`} to Galary
      </Button>
      {formErrors.form && (
        <span className={styled.form_error}>{formErrors.form}</span>
      )}
    </form>
  );
};
