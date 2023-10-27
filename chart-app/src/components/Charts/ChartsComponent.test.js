import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import ChartsComponent from './ChartsComponent';

describe('ChartsComponent component', () => {
    test('should render ChartsComponent', () => {
        render(<Provider store={store}><ChartsComponent /></Provider>);
    });
});