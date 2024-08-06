import "./chart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "react-bootstrap/Dropdown";
import ApexCharts from "react-apexcharts";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

const dropdownItems = [
  { id: 1, label: "Action", href: "#/action-1" },
  { id: 2, label: "Another action", href: "#/action-2" },
  { id: 3, label: "Something else", href: "#/action-3" },
];

const chartItems = [
  { color: "blue", label: "Invoiced", amount: "$5,132" },
  { color: "green", label: "Received", amount: "$2,132" },
  { color: "red", label: "Pending", amount: "$1,132" }
];

// Method to get color class from color name
const getColorClass = (color) => {
  switch (color) {
    case "blue":
      return "text-blue-custom";
    case "green":
      return "text-green-500";
    case "red":
      return "text-red-custom";
    default:
      return "text-gray-500"; // Fallback color
  }
};
const Chart = () => {
  // Static data
  const countryNames = ["Overdue", "Draft", "Paid", "Unpaid"];
  const medals = [39, 38, 28, 89];

  const chartOptions = {
    labels: countryNames,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false, // Hide the legend
    },
  };

  return (
    <div className="chart">
      <div className="chart-top">
        <h5 className="title">Invoice Analytics</h5>
        <div className="chart-dropdown">
          <Dropdown className="dmm">
            <Dropdown.Toggle variant="success" id="dropdown-basics">
              Monthly
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownItems.map((item) => (
                <Dropdown.Item key={item.id} href={item.href}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="chart-body">
      <div style={{ marginTop: '1.5rem' }}>
    <ApexCharts
      type="donut"
      width={444}
      height={350}
      series={medals}
      options={chartOptions}
    />
  </div>
         <div className="flex items-center justify-center gap-x-6 p-4 text-[#2f2e2e]">
          {chartItems.map((item, index) => (
            <div className="chart-item" key={index}>
              <p className="flex items-center">
                <CircleIcon className={`mr-2 ${getColorClass(item.color)} text-xs`} style={{ fontSize: '15px' }} />
                {item.label}
              </p>
              <h5 className="text-lg">{item.amount}</h5>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Chart;
