import * as React from 'react';

export const Fancy: React.SFC<{ text: string }> 
    = (props) => <h1>{props.text}</h1>;