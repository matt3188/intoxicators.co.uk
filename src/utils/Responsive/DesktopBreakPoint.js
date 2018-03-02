import React from 'react';
import Breakpoint from './breakpoints';

const DesktopBreakPoint = props => {
  return <Breakpoint name="desktop">{props.children}</Breakpoint>;
};

export default DesktopBreakPoint;
