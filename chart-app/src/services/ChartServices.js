import http from "../http-common";

const getAllChartData = () => {
    return http.get("/chartsData");
};

const createChartItem = data => {
    return http.post("/chartsData", data);
};

const updateChartItem = (id, data) => {
    return http.put(`/chartsData/${id}`, data);
};

const removeChartItem = id => {
    return http.delete(`/chartsData/${id}`);
};

const ChartServices = {
    getAllChartData,
    createChartItem,
    updateChartItem,
    removeChartItem
};

export default ChartServices;