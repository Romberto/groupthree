import { Navigate } from "react-router";
import { PATH } from "../../utils/constants";
import {  ProtectedRouteElementType } from "@/utils/types";
import { useAppSelector } from "@/app/hooks";


export const ProtectedRouteElement: React.FC<ProtectedRouteElementType> = ({ element }) => {
  const user = useAppSelector((state)=>state.authReducer.auth)
  if (!user) {
    return <Navigate to={PATH.SIGNIN} />
  }
  return element
}
