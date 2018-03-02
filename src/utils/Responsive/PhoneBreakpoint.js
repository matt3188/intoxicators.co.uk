import React from 'react';
import Breakpoint from './breakpoints';

const PhoneBreakpoint = props => {
  return <Breakpoint name="phone">{props.children}</Breakpoint>;
};

export default PhoneBreakpoint;
