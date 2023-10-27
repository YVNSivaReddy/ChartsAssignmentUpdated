import {
    CREATE_CHART_ITEM,
    RETRIEVE_CHART_DATA,
    UPDATE_CHART_ITEM,
    DELETE_CHART_ITEM,
    SAVED_CHART_ITEM
} from "./type";

import ChartServices from "../services/ChartServices";

export const createChartItem = (addData) => async (dispatch) => {
    try {
        //const res = await ChartServices.createChartItem();
        console.log(addData);
        dispatch({
            type: CREATE_CHART_ITEM,
            payload: addData,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveAllChartsData = () => async (dispatch) => {
    try {
        const res = await ChartServices.getAllChartData();
        console.log(res)
        dispatch({
            type: RETRIEVE_CHART_DATA,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateChartsItem = (updateData) => async (dispatch) => {
    try {
        //const res = await ChartServices.updateChartItem();
        console.log(updateData);
        dispatch({
            type: UPDATE_CHART_ITEM,
            payload: updateData,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteChartItem = (deleteData) => async (dispatch) => {
    try {
        //const res = await ChartServices.removeChartItem();
        console.log(deleteData);
        dispatch({
            type: DELETE_CHART_ITEM,
            payload: deleteData,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveSavedItem = (savedData) => async (dispatch) => {
    try {
        console.log(savedData);
        dispatch({
            type: SAVED_CHART_ITEM,
            payload: savedData,
        });
    } catch (err) {
        console.log(err);
    }
};