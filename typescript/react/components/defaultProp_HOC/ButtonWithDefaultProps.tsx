import React, { MouseEvent, ComponentClass } from 'react';
import { withDefaultProps } from './withDefaultProps';

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
} & DefaultProps;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  color: 'blue' as 'blue' | 'green',
  type: 'button' as 'button' | 'submit',
};

const resolveColorTheme = (color: DefaultProps['color']) => {
  const btnThemes = {
    blue: 'btn-primary',
    green: 'btn-secondary',
    red: 'btn-accent',
  };

  return btnThemes[color] || 'btn-default';
};

const Button = withDefaultProps(
  defaultProps,
  class extends React.Component<Props> {
    render() {
      const { onClick: handleClick, color, type, children } = this.props;
      const cssClass = resolveColorTheme(color);

      return (
        <button type={type} className={cssClass} onClick={handleClick}>
          {children}
        </button>
      );
    }
  },
);

export default Button;
