import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import Home from '../index';

describe('<Button />', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(Home).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
