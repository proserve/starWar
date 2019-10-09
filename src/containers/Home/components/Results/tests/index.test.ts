import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import Result from '../index';

describe('<Button />', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(Result).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
