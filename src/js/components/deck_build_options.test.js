import React from 'react';
import { shallow } from 'enzyme';

import { DeckBuildOptions } from './deck_build_options';

describe('<DeckBuildOptions />', () => {
  it('Renders without crashing', () => {
    shallow(<DeckBuildOptions />);
  })
});
