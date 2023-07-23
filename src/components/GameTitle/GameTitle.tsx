import { ReactNode } from 'react';
import { Title } from './styles';

interface TitleProps {
  children: ReactNode;
}

export function GameTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
}
