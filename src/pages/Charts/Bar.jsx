import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar Chart" title="Olympic Medals" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        >
          <Inject
            services={[
              ColumnSeries,
              DateTime,
              Legend,
              Category,
              Tooltip,
              DataLabel,
            ]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
