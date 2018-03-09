import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';

describe('<Carousel />', () => {
  it('renders 1 <Carousel /> component', () => {
    const component = shallow(<Carousel />);
    expect(component).toHaveLength(1);
  });
});
