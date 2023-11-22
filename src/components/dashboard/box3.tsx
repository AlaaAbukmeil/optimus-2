import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function LineChart() {
  const data = {
    labels: ["11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM"],
    datasets: [
      {
        label: "IAQ %",
        data: [70, 30, 65, 20, 88, 90],
        backgroundColor: [
          "#95E9A7",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
            "rgba(54, 162, 235, 0.2)",
        ],
        borderWidth: 1,
        fill: true,
        tension: 0.5
      },
    ],
  };

  const options: any = {
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 100,
      },
      x: {
        stacked: true,
      },
      
    },
    plugins: {
      legend: {
        display: false,
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

function Box3() {
  return (
    <div className="box-3">
      <div className="occupancy-box-1">
        <div className="occupancy-box-1-1">
          <p>IAQ Index</p>
          <p>88 %</p>
        </div>
        <div className="occupancy-box-1-2">
          <p className="occ-status-text">Status: Excellent</p>
        </div>
      </div>
      <div className="occupancy-box-2">
        <div className="bar-chart-container">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default Box3;
