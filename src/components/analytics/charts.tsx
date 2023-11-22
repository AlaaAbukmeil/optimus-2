import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function LineChart(props: any) {
  const data = {
    labels: ["11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM"],
    datasets: [
      {
        label: props.label,
        data: [12, 19, 3, 5, 40, 3],
        backgroundColor: [
          props.color,
          
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      },
    ],
  };

  const options: any = {
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 50,
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: "montserrat",
            // size: 30,
          },
          formatter: (value: any, ctx: any) => {
            return value;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} className="chart-occ" />;
}

function Charts() {
  let iaqTitles = [
    "Temperature",
    "Humidity",
    "CO2",
    "TVOC",
    "PM2_5",
    "PM10",
    "Pressure",
    "HCHO",
    "Score",
  ];
  let data: any = {
    Temperature: "22 C",
    TemperatureColor: "#95E9A7",
    Humidity: "70 %",
    HumidityColor: "#95E9A7",
    CO2: "700 PPM",
    CO2Color: "#ff9f40",
    TVOC: "10 PPM",
    TVOCColor: "#fc846533",
    PM2_5: "20 PPM",
    PM2_5Color: "#ff9f40",
    PM10: "10 PPM",
    PM10Color: "#95E9A7",
    Pressure: "1000 Ps",
    PressureColor: "#95E9A7",
    HCHO: "2 PPM",
    HCHOColor: "#fc846533",
    Score: "88 %",
    ScoreColor: "#95E9A7",
  };
  return (
    <div>
      <div className="metrics-title">
        <p>Charts IAQ Parameters</p>
      </div>
      <div className="charts">
        {iaqTitles.map((title, index) => (
          <div className="chart-container">
            <LineChart label={title} color={data[title + "Color"]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charts;
