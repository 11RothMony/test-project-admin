import React from "react";
import { Chart } from "react-google-charts";
import { GoKebabHorizontal } from "react-icons/go";

import BoxDashboard from "../components/common/BoxDashboard";
import ProductTable from "../components/common/ProductTable";

export const options = {
  backgroundColor: "transparent",
  chartArea: { left: 10, top: 20, width: "100%", height: "100%" },
  pieHole: 0.5, // This creates the donut chart effect
  slices: {
    0: { offset: 0.0 }, // Example of slice customization
  },
};

export const data = [
  ["Task", "Hours per Day"],
  ["Electronics", 11],
  ["Audio", 2],
  ["Gaming", 2],
  ["GameStation", 2],
  ["Mobile Phones", 7],
];

export const data2 = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options2 = {
  backgroundColor: "transparent",
  isStacked: true,
  height: 500,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
  chartArea: { left: 70, top: 30, width: "80%" },
};

export const options3 = {
  height: 500,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
  chartArea: { left: 70, top: 30, width: "80%" },
  backgroundColor: "transparent", // Makes the background transparent
};

export const data3 = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

function Dashboard({productList}) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="grid  h-[370px] grid-rows-2 w-8/12 grid-flow-col">
          <BoxDashboard
            title={"Total Users"}
            number={"124"}
            percentage={"50"}
            icon="user"
            gradient="blueToPurplew"
          />
          <BoxDashboard
            title={"Total Orders"}
            number={"207"}
            percentage={"70"}
            icon="cart"
            gradient="greenToTeal"
          />
          <BoxDashboard
            title={"Total Products"}
            number={"256"}
            percentage={"80"}
            icon="bag"
          />
          <BoxDashboard
            title={"Total Reviews"}
            number={"144"}
            percentage={"45"}
            icon="star"
            gradient="redToYellow"
          />
        </div>
        <div className=" p-5 h-[362px] bg-gradient-to-t w-4/12 from-blue-400 rounded-xl to-purple-600">
          <div className=" flex justify-between">
            <h1 className="text-white text-xl font-medium">Total Sale</h1>
            <div className="dropdown dropdown-bottom dropdown-end ">
              <GoKebabHorizontal
                tabIndex={0}
                className=" text-white w-7 h-7 cursor-pointer"
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Last Day</a>
                </li>
                <li>
                  <a>Last week</a>
                </li>
                <li>
                  <a>Last Month</a>
                </li>
                <li>
                  <a>Last Year</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white ">
            <h1 className="font-bold text-3xl py-1 ">$2,333,243,00</h1>
            <h3>$2,333,243,00 in last month</h3>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"240px"}
            />
          </div>
        </div>
      </div>
      <ProductTable products={productList} />
      <div className="w-full flex gap-5 mt-10 rounded-lg">
        <div className="w-3/6 bg-base-100 rounded-lg shadow-gray-300 shadow-lg">
          <h1 className="font-bold text-xl p-7 ">Sales Report</h1>
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
          />
        </div>
        <div className="w-3/6 bg-base-100 rounded-lg shadow-gray-300 shadow-lg ">
          <h1 className="font-bold text-xl p-7 ">Sales Report</h1>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data3}
            options={options3}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
