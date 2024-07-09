import { StyledButton } from './Button.style';

export interface ButtonProps {
  onClick: () => void;
  background: string;
  color: string;
  width: string;
  text: string;
  children?: React.ReactNode;
}

export const Button = ({ onClick, background, color, width, text, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} $background={background} $color={color} $width={width}>
      {children}
      {text}
    </StyledButton>
  );
};
