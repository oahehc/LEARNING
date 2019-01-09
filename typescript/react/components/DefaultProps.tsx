import React, { MouseEvent, SFC } from 'react'

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void,
  color?: string,
}

const Button: SFC<Props> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
)

export default Button