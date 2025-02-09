import { Navigate } from "react-router";
import { PATH } from "../../utils/constants";

type ProtectedRouteElement = {
  element: JSX.Element;
};

type UserType = {
  email: string;
  password: string;
  auth: boolean;
};

export const ProtectedRouteElement: React.FC<ProtectedRouteElement> = ({
  element,
}) => {
  const user = localStorage.getItem("User");
  console.log(user);
  if (!user) {
    return <Navigate to={PATH.SIGNUP} />;
  } else {
    const currentUser: UserType = JSON.parse(user);
    if (currentUser.auth) {
      return element;
    } else {
      return <Navigate to={PATH.SIGNIN} />;
    }
  }
};
