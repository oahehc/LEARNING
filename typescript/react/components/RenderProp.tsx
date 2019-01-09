import React, { Component, MouseEvent, SFC } from 'react';

const isFunction = (target: any): boolean =>
  target && typeof target === 'function';

const initialState = { show: false };

type State = Readonly<typeof initialState>;
export type Props = Partial<{
  // use partial for optional props
  children: RenderCallback;
  render: RenderCallback;
}>;
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps = {
  show: State['show']; //  leveraging existing type definition
  toggle: Toggleable['toggle']; // leveraging type inference and structural nature of classes
};

export default class Toggleable extends Component<Props, State> {
  readonly state: State = initialState;

  private toggle = (event: MouseEvent<HTMLElement>) =>
    this.setState(updateShowState);

  public render() {
    const { children, render } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    if (render) {
      return render(renderProps);
    }
    return isFunction(children) ? children(renderProps) : null;
  }
}

const updateShowState = (preState: State) => ({ show: !preState.show });

// apply Toggleable
export const App: SFC<{}> = () => (
  <>
    <Toggleable>
      {({ show, toggle }) => (
        <>
          <button onClick={toggle}>Toggle</button>
          {show ? <p>content</p> : null}
        </>
      )}
    </Toggleable>
    <Toggleable render={({ show, toggle }) => <div>...</div>} />
  </>
);
