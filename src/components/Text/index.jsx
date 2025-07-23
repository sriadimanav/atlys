import { createElement } from 'react';

const Text = ({
  as = 'p',
  htmlFor,
  size = 16,
  weight,
  color = 'black',
  styles = {},
  className,
  onClick,
  children,
}) => {
  return createElement(
    as,
    {
      style: { fontSize: size, fontWeight: weight, color, ...styles },
      className,
      onClick,
      htmlFor,
    },
    children,
  );
};

export default Text;
