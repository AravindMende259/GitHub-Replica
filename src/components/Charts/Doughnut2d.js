// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const Doughnut2d = ({data}) => {

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
   
    dataFormat: "json", // Data type

    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars per language",    //Set the chart caption
        
        theme: "fusion"     ,
        decimals:0,
        showPercentValues:0,
                    //Set the theme for your chart
      },
      // Chart Data - from step 2
      data
    }
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
