import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function BarChart() {
  const data = {
    labels: ["11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM"],
    datasets: [
      {
        label: "PPX",
        data: [12, 19, 3, 5, 40, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
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

  return <Bar data={data} options={options} className="chart-occ" />;
}

function Box2() {
  return (
    <div className="box-2">
      <div className="occupancy-box-1">
        <div className="occupancy-box-1-1">
          <p>Occupancy Load</p>
          <p>8 People</p>
        </div>
        <div className="occupancy-box-1-2">
          <p>Max Load: 150</p>
          <p className="occ-status-text">Status: Low</p>
        </div>
      </div>
      <div className="occupancy-box-2">
        <div className="bar-chart-container">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Box2;
