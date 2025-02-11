import logo from '@/assets/logo.svg';
import { LogoType } from '@/utils/types';

export const Logo: React.FC<LogoType> = ({ className }) => (
  <img src={logo} className={className} alt="Logo" />
);
