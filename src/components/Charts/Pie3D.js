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

const Pie3D = ({ data }) => {

  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
         chart: {
        caption: "Language",
        pieRadius:'50%',
        decimals: "1",
      
        theme: "fusion",
      },
     
      data:data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
