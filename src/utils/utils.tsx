import { useAppDispatch } from '@/app/hooks';
import { LOCALFAVORITE, LOCALUSER } from './constants';
import { resetFavoriteList } from '@/components/pages/FavoritesPage/FavoritesPage.slice';

type User = {
  email: string;
  password: string;
  auth?: boolean;
};

export function LogIn(email: string, password: string) {
  const user = window.localStorage.getItem(LOCALUSER);
  if (user) {
    try {
      const parsedUser: User = JSON.parse(user);
      if (email === parsedUser.email && password === parsedUser.password) {
        window.localStorage.setItem(
          LOCALUSER,
          JSON.stringify({ ...parsedUser, auth: true }),
        );
        return user;
      }
    } catch (error) {
      console.error('Failed to parse user data:', error);
    }
  } else {
    return false;
  }
}

export function logOut() {
  const user = window.localStorage.getItem(LOCALUSER);
  if (user) {
    let currentUser = JSON.parse(user);
    currentUser.auth = false;
    window.localStorage.setItem(LOCALUSER, JSON.stringify({ ...currentUser }));
  }
}

export function isUserAuth() {
  const data = window.localStorage.getItem(LOCALUSER);
  if (data) {
    const dataAuth = JSON.parse(data).auth;
    if (dataAuth) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export function isEmaiValid(value: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export function addUser(email: string, password: string) {
  window.localStorage.setItem(
    LOCALUSER,
    JSON.stringify({ email: email, password: password, auth: true }),
  );
}
// проверка есть ли пользователь с таким email
export function EmailAlreadyEx(email: string) {
  const localUser = window.localStorage.getItem(LOCALUSER);
  if (localUser) {
    try {
      const localEmail = JSON.parse(localUser).email;
      if (localEmail === email) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Failed to parse local storage data:", error');
    }
  }
}
// формирует путь для изображения
export const makeImagePath = (image_id: string) => {
  return `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`;
};

// взять список id избранного
export const getFavoritasList = (): [] => {
  const localFavorites = window.localStorage.getItem(LOCALFAVORITE);
  if (localFavorites) {
    return JSON.parse(localFavorites).favoritas;
  } else {
    return [];
  }
};

// доюавить id в список избранного
export const addFavotitesToList = (id: number) => {
  const localFavorites = getFavoritasList();
  const newFavorites = [...localFavorites, id];
  window.localStorage.setItem(
    LOCALFAVORITE,
    JSON.stringify({ favoritas: newFavorites }),
  );
};

// удалить из избранного
export const removeFavoritesOfList = (id: number) => {
  const localFavorites = getFavoritasList();
  const newFavorites = localFavorites.filter(item => item !== id);
  window.localStorage.setItem(
    LOCALFAVORITE,
    JSON.stringify({ favoritas: newFavorites }),
  );
};

export const makeButtonList = (total: number, currentButton: number) => {
  const result: Array<{ index: number }> = [];
  if (total > 3) {
    switch (currentButton) {
      case total - 2:
        for (let i = currentButton; i < total + 1; i++) {
          result.push({ index: i });
        }
        break;
      case total - 1:
        for (let i = currentButton - 1; i < total + 1; i++) {
          result.push({ index: i });
        }
        break;
      case total:
        for (let i = currentButton - 2; i < total + 1; i++) {
          result.push({ index: i });
        }
        break;
      default:
        for (let i = 0; i < 3; i++) {
          result.push({ index: currentButton + i });
        }
        break;
    }
  } else {
    for (let i = 1; i < total + 1; i++) {
      result.push({ index: i });
    }
  }
  return result;
};
