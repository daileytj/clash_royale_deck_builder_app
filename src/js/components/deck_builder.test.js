import React from 'react';
import { shallow } from 'enzyme';

import DeckBuilder from './deck_builder';

describe('<DeckBuilder />', () => {
  it('Renders without crashing', () => {
    shallow(<DeckBuilder />);
  })
});
