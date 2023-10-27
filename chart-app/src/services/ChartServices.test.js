import ChartServices from './ChartServices';

const mockData = [
    ["Expenses", "Expenses", "Amount"],
    ["Salary", "Bills", 5000],
    ["Bills", "Electric Bill", 1000],
    ["Bills", "Mobile Bill", 2000]
];

describe('ChartServices', () => {
    it('ChartServices returns data', async () => {
        jest.spyOn(ChartServices, 'getAllChartData').mockResolvedValue(mockData);
    });
});