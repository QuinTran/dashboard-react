import React from 'react'
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend,
    PieSeries,
    AccumulationTooltip,
    AccumulationDataLabel,
  } from "@syncfusion/ej2-react-charts";

const Pie = ({id, data, legendVisiblity, height, currentMode}) => {
  return (
    <AccumulationChartComponent
          id={id}
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
          legendSettings={{ visible: true, background: "white" }}
          height={height}
          legendVisiblity={legendVisiblity}
          enableSmartLabels={true}
          enableAnimation={false}
          center={{ x: "50%", y: "50%" }}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              PieSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data}
              xName="x"
              yName="y"
              type="Pie"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={0}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
  )
}

export default Pie