import { LoadBtn } from './Button.styled';

export const Button = ({ onShow }) => {
  return (
    <LoadBtn onClick={onShow} type="button">
      Load more
    </LoadBtn>
  );
};
