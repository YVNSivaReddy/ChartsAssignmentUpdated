import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderComponent from './HeaderComponent';
import React from 'react'

describe('App component', () => {
    test('should render App', () => {
        const { getByTestId, getAllByTestId } = render(<Provider store={store}><HeaderComponent /></Provider>);

        const langId = getByTestId('langId');
        //const removeCookieId = getByTestId('removeCookieId');

        fireEvent.click(langId, { target: { value: 'en' } });
        let options = getAllByTestId('select-option')
        expect(options[0].selected).toBeTruthy();

        //fireEvent.click(removeCookieId);
    });
});