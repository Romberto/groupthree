import { Navigate } from "react-router";
import { PATH } from "../../utils/constants";

type ProtectedRouteElement = {
  element: JSX.Element
}

export const ProtectedRouteElement: React.FC<ProtectedRouteElement> = ({ element }) => {
  const user = localStorage.getItem('User');
  console.log(user)
  if (!user) {
    return <Navigate to={PATH.SIGNIN} />
  }

  return element
}
