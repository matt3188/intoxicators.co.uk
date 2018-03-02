import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px)',
  phone: '(max-width: 767px)',
};

const Breakpoint = props => {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
};

export default Breakpoint;
