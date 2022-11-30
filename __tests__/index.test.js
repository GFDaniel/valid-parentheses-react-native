import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
describe('Render App', () => {
    it('renders correctly', () => {
        const component = renderer.create(<App />).toJSON();
        expect(component).toBeDefined(); 
        expect(component).toMatchSnapshot();
    });
});
