import React from "react";
import { Chart } from "react-google-charts";
import { GoKebabHorizontal } from "react-icons/go";
import BoxDashboard from "../components/common/BoxDashboard";
import ProductTable from "../components/common/ProductTable";

export const options = {
  backgroundColor: "transparent",
  chartArea: { left: 10, top: 20, width: "100%", height: "100%" },
};

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="grid  h-[370px] grid-rows-2 w-8/12 grid-flow-col gap-2">
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
        <div className=" p-5 h-[370px] bg-gradient-to-t w-4/12 from-blue-400 rounded-xl to-purple-600">
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
      <ProductTable/>
    </div>
  );
}

export default Dashboard;
