export const candelStickOptions = {
  chart: {
    height: 350,
    type: "candlestick",
  },
  title: {
    text: "CandleStick Chart - Category X-axis",
    align: "left",
  },
  annotations: {
    xaxis: [
      {
        x: "Oct 06 14:00",
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            fontSize: "12px",
            color: "#fff",
            background: "#00E396",
          },
          orientation: "horizontal",
          offsetY: 7,
          text: "Annotation Test",
        },
      },
    ],
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    labels: {
      formatter: function (val) {
        return new Date(val);
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
