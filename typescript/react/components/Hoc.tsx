import React, { Component, ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Toggleable, {
  Props as ToggleableProps,
  ToggleableComponentProps,
} from './RenderProp';
import { render } from 'react-dom';

type OwnProps = object;
type InjectedProps = ToggleableComponentProps;

export const withToggleable = <OriginalProps extends object>(
  UnwrappedComponent: ComponentType<OriginalProps & InjectedProps>,
) => {
  type Props = Omit<OrigianlProps, keyof InjectedProps> & OwnProps;

  class WithToggleable extends Component<Props> {
    static readonly displayName =
      WithToggleable.displayName || UnwrappedComponent.displayName;
    static readonly WrappedComponent = UnwrappedComponent;

    render() {
      const { ...rest } = this.props;
      return (
        <Toggleable
          render={(renderProps) => (
            <UnwrappedComponent {...rest} {...renderProps} />
          )}
        />
      );
    }
  }

  return hoistNonReactStatics(WithToggleable, UnwrappedComponent);
};
