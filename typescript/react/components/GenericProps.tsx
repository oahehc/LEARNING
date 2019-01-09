import React, { Component, ComponentType, ReactNode, MouseEvent } from 'react';

const initialState = { show: false };
const defaultProps: DefaultProps = { props: {} as { [name: string]: any } };

type State = Readonly<typeof initialState>;
type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode;
    render: RenderCallback;
    component: ComponentType<ToggleableComponentProps<P>>;
  } & DefaultProps<P>
>;
type DefaultProps<P extends object = object> = { props: P };
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
export type ToggleableComponentProps<P extends object = object> = {
  show: State['show'];
  toggle: Toggleable['toggle'];
} & P;

export class Toggleable<T extends object = object> extends Component<
  Props<T>,
  State
> {
  static ofType<T extends object>() {
    return Toggleable as Constructor<Toggleable<T>>;
  }
  static readonly defaultProps: Props = defaultProps;
  readonly state: State = initialState;

  private toggle = (event: MouseEvent<HTMLElement>) =>
    this.setState(updateShowState);

  render() {
    const {
      component: InjectedComponent,
      children,
      render,
      props,
    } = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle,
    };
    // when component prop api is used children is ReactNode not a function
    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      );
    }
    if (render) {
      return render(renderProps);
    }
    // children as a function comes last
    return isFunction(children) ? children(renderProps) : null;
  }
}

const updateShowState = (preState: State) => ({ show: !preState.show });
const isFunction = (target: any): boolean =>
  target && typeof target === 'function';
