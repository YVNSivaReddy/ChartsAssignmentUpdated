import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MainComponent from './MainComponent';

describe('MainComponent component', () => {
    test('should render MainComponent', () => {
        const { getByTestId } = render(<Provider store={store}><MainComponent /></Provider>);

        const root = getByTestId('rootParent');
        const formParent = getByTestId('rootChartFormParent');
        const chartParent = getByTestId('rootChartParent');

        expect(root).toContainElement(formParent);
        expect(root).toContainElement(chartParent);
    });
});