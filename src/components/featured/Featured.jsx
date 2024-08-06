import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "react-apexcharts";
import React, { useState } from "react";

const dropdownItems = [
  { id: 1, label: "Action", href: "#/action-1" },
  { id: 2, label: "Another action", href: "#/action-2" },
  { id: 3, label: "Something else", href: "#/action-3" },
];

const metrics = [
  { label: 'Total Sales', value: '$100', color: 'blue' },
  { label: 'Receipts', value: '$300', color: '#22cc62' },
  { label: 'Expenses', value: '$100', color: 'red' },
  { label: 'Earnings', value: '$700', color: 'black' },
];

const Featured = () => {
  const [state, setState] = useState({
    options: {
      colors: ["rgb(118, 56, 255)", "#FF9800"],
      chart: {
        id: "basic-bar",
        offsetX: 8,
        toolbar: {
          show: false, // Disable the toolbar
        },
  
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "oct"],
       
      },
      yaxis: {
        min: 0,
        max: 250,
        tickAmount: 5,
        title: {
          text: 'Value (thousands)', // Instructional text
          style: {
            color: '#000',
            fontSize: '8px',
            fontFamily: 'Arial',
           
          },
          
        },
        labels: {
          formatter: function (val) {
            return val !== undefined && val !== null ? val.toFixed(0) : '';
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '45%', 
        },
      },
      dataLabels: {
        enabled: false, // Ensure that data labels are disabled globally
      },
      fill: {
        opacity: 1,
      },
      stroke: {
        show: true,
        width: 2, // Border width
        colors: ['transparent'],
        // Border color
      },
      
    },
   
    series: [
      {
        name: "Received",
        data: [70, 150, 80, 180, 150, 230, 201, 91, 220,204],
      },
      {
        name: "Pending",
        data: [23, 42, 35, 27, 43, 60, 20, 81,180,20],
      },
    ],
  });

  return (
    <div className="featured">
      <div className="top">
        <h5 className="title">Sales Analytics</h5>
        <div className="feature-container">
        <Dropdown className="dmm">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
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

      <div className="feature-body">
        <div className="body-header">
          {metrics.map((metric, index) => (
            <div className="body-header-text" key={index}>
              <span className="body-header-span">
                {metric.label}
              </span>{" "}
              <p 
                className="body-header-p" 
                style={{ color: metric.color }} 
              >
                {metric.value}
              </p>{" "}
            </div>
          ))}
        </div>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="600"
      
         
        />
      </div>
    </div>
  );
};

export default Featured;
