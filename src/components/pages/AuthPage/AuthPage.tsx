import { FC } from "react"
import { RegisterForm } from "../../UI/RegisterForm/RegisterForm"
import { AuthPageProps } from "../../../utils/types"

export const AuthPage: FC<AuthPageProps> = ({ mode }) => {
  return (
    <RegisterForm  mode={mode} />
  )
}