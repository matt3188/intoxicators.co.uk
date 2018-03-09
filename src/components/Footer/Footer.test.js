import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('(Component) <Footer />', () => {
  it('should render the correct message', () => {
    const component = shallow(<Footer />);
    expect(component.find('p').text()).toEqual('Made with ♥ by Matt Coleman');
  });
});
