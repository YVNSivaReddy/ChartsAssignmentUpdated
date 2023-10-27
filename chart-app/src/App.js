import React, { useEffect } from 'react';
import { retrieveAllChartsData, retrieveSavedItem } from './actions/charts';
import { useDispatch } from "react-redux";
import HeaderComponent from './components/headerContent/HeaderComponent';
import MainComponent from './components/mainContent/MainComponent';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const serializedState = localStorage.getItem('state');
        const parsedState = JSON.parse(serializedState);
        if (parsedState === null || parsedState === undefined || parsedState.charts.length===0) {
            dispatch(retrieveAllChartsData());
        }
        else {
            dispatch(retrieveSavedItem(parsedState.charts));
        }
    }, [])

    return (
        <div className="App" data-testid="rootApp">
            <HeaderComponent />
            <MainComponent />
        </div>
  );
}

export default App;