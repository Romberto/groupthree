type User = {
  email: string;
  password: string;
  auth?: boolean;
};

export function LogIn(email: string, password: string) {
  const user = window.localStorage.getItem("User");
  if (user) {
    try {
      const parsedUser: User = JSON.parse(user);
      if (
        email === parsedUser.email &&
        password === parsedUser.password
      ) {
        window.localStorage.setItem(
          "User",
          JSON.stringify({ email: email, password: password, auth: true })
        );
        return user;
      }
    } catch (error) {
        console.error("Failed to parse user data:", error)
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
    "User",
    JSON.stringify({ email: email, password: password, auth: true })
  );
}
// проверка есть ли пользователь с таким email
export function EmailAlreadyEx(email: string) {
  const localUser = window.localStorage.getItem("User");
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
