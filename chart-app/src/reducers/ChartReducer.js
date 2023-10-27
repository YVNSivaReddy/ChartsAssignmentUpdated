import {
    CREATE_CHART_ITEM,
    RETRIEVE_CHART_DATA,
   UPDATE_CHART_ITEM,
    DELETE_CHART_ITEM,
    SAVED_CHART_ITEM
} from "../actions/type";

const initialState = [];

const ChartReducer = (charts = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CHART_ITEM:
            charts.push(payload)
            return charts;
        case RETRIEVE_CHART_DATA:
            return payload;
        case UPDATE_CHART_ITEM:
            charts && charts.map((item) => {
                if (item[1] === payload[1]) {
                    item[2] = payload[2];
                }
            })
            return charts;
        case DELETE_CHART_ITEM:
            const temp = charts;
            charts && charts.map((item, index) => {
                if (item[1] === payload) {
                    temp.splice(index, 1);
                }
            })
            charts = [];
            temp && temp.map((item, index) => {
                charts.push(item);
            });
             return charts;
        case SAVED_CHART_ITEM:
            return payload;
        default:
            return [];
    }
}

export default ChartReducer;