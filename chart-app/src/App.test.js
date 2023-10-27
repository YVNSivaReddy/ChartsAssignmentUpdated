import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

describe('App component', () => {
    test('should render App', () => {
        const { getByTestId } = render(<Provider store={store}><App /></Provider>);

        const root = getByTestId('rootApp');
        const formParent = getByTestId('rootChartFormParent');
        const chartParent = getByTestId('rootChartParent');

        expect(root).toContainElement(formParent);
        expect(root).toContainElement(chartParent);
    });
});