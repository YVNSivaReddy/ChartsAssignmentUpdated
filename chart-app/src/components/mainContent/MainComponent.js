import ChartFormComponent from "../Charts/ChartFormComponent";
import ChartsComponent from "../Charts/ChartsComponent";
import "../headerContent/HeaderComponent.css";

const MainComponent = () => {
    return (
        <div data-testid="rootParent">
            <div className="paraStyle" data-testid="rootChartFormParent">
                <ChartFormComponent />
            </div>
            <div className="paraStyle" data-testid="rootChartParent">
                <ChartsComponent />
            </div>
        </div>
    )
}

export default MainComponent;