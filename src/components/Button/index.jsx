import { StyledButton } from "./style"

export const ComponentButton = ({
  children,
  onClick, type = "button",
  disabled = false,
}) => {

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
