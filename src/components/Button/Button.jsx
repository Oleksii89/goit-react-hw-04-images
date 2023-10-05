import { StyledButtonLoadMore } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <StyledButtonLoadMore type="button" onClick={onClick}>
      {children}
    </StyledButtonLoadMore>
  );
};
