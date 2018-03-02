import React from 'react';
import Breakpoint from './breakpoints';

const TaletBreakpoint = props => {
  return <Breakpoint name="tablet">{props.children}</Breakpoint>;
};

export default TaletBreakpoint;
