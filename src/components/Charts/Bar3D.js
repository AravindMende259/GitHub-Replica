// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import charts from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, charts, FusionTheme);

const Bar3D= ({ data }) => {

  // console.log(data, "fubjghmv jhgjhg check...");
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
         chart: {
          "caption": "Monthly revenue for last year",
         
          "xAxisName": "Repos",
          "yAxisName": "Forks",
          xAxisNameFontSize:'16px',
          yAxisNameFontSize:'16px',

          "theme": "fusion"
      },
     
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
