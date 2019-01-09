// Typescript 3.0 support defaultProps
// https://github.com/Microsoft/TypeScript/pull/24422
import React from 'react';

type PropsType = {
  className: string;
};

export default class Button extends React.Component<PropsType> {
  static defaultProps: PropsType = {
    className: 'default',
  };

  render() {
    const { className, children } = this.props;

    return <button className={className}>{children}</button>;
  }
}

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Button>Default</Button>
        <Button className="test">Test</Button>
      </div>
    );
  }
}
