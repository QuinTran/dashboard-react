import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  HiloOpenCloseSeries,
  Logarithmic,
  DateTime,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

// const date1 = new Date('2017, 1, 1');

// // eslint-disable-next-line consistent-return
// function filterValue(value) {
//   if (value.x >= date1) {
//     // eslint-disable-next-line no-sequences
//     return value.x, value.high, value.low;
//   }
// }
// const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const {currentMode} = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial Chart" title="Financial Analysis" />

      <div className="w-full">
        <ChartComponent
          id="finacial-chart"
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
          style={{ textAlign: "center" }}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ visible: true, background: "white" }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        >
          <Inject
            services={[
              HiloOpenCloseSeries,
              Tooltip,
              Category,
              Crosshair,
              Zoom,
              DateTime,
              Logarithmic,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="HiloOpenClose"
              low="low"
              high="high"
              open="open"
              close="close"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
