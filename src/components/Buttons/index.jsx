import { Button } from "./style";

export const Buttons = ({ children, onClick, type }) => {
  return <Button type={type} onClick={onClick ? onClick : false}>{children}</Button>;
};
