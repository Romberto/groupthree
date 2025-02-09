import { Navigate } from "react-router";
import { PATH } from "../../utils/constants";
import {  ProtectedRouteElementType } from "@/utils/types";


export const ProtectedRouteElement: React.FC<ProtectedRouteElementType> = ({ element }) => {
  const user = localStorage.getItem('User');
  console.log(user)
  if (!user) {
    return <Navigate to={PATH.SIGNIN} />
  }
  return element
}
