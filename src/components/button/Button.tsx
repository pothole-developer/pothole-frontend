import { StyledButton } from './Button.style';

export interface ButtonProps {
  onClick: () => void;
  background: string;
  color: string;
  width: string;
  border?: string;
  children?: React.ReactNode;
}

export const Button = ({ onClick, background, color, width, border, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} $background={background} $color={color} $width={width} $border={border}>
      {children}
    </StyledButton>
  );
};
