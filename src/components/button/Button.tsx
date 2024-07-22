import { StyledButton } from './Button.style';

export interface ButtonProps {
  onClick?: () => void;
  background: string;
  color: string;
  width: string;
  justifyContent?: string;
  border?: string;
  type?: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
}

export const Button = ({ onClick, background, color, width, justifyContent, border, type, children }: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $background={background}
      $color={color}
      $width={width}
      $justifyContent={justifyContent}
      $border={border}
    >
      {children}
    </StyledButton>
  );
};
