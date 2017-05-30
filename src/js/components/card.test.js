import React from 'react';
import { shallow } from 'enzyme';

import Card from './card';

describe('<Card />', () => {
  it('Renders without crashing', () => {
    shallow(<Card />);
  })
});
