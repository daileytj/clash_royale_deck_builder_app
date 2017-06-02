import React from 'react';
import { shallow } from 'enzyme';

import { AvailableCardList } from './available_card_list';

describe('<AvailableCardList />', () => {
  it('Renders without crashing', () => {
    shallow(<AvailableCardList />);
  })
});
