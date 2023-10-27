import { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

const ChartsComponent = () => {
    const [data, setData] = useState([]);
    const chartsData = useSelector(state => state.charts);

    useEffect(() => {
        if (chartsData.length !== 0) {
            setData(chartsData);
        }
    }, [chartsData])

    const options = {
        
    };

    return(
        <Chart
            chartType="Sankey"
            width="100%"
            height="200px"
            data={data}
            options={options}
        />
    )
}

export default ChartsComponent;