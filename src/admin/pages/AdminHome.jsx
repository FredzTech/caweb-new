import React from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import CountCards from "../components/AdminHomeComponents/CountCards";
import Piechart from "../components/charts/Pie";

const AdminHome = () => {
  return (
    <div className="">
      <CountCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-5">
        <div className="w-full h-[320px] rounded-md bg-white shadow-md">
          <h3 className="text-2xl text-center p-3">Scc Members Chart</h3>

          <div className="flex items-center justify-center space-x-4">
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#0088FE] mr-1"></div>ST ANGELUS
            </h2>
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#00C49F] mr-1"></div>ST JOSEPH
            </h2>
            <h2 className="flex items-center font-light text-sm">
              <div className="w-4 h-4 bg-[#FF8042] mr-1"></div>ST PETERS
            </h2>
          </div>
          <div className="w-50 h-60">
            <Piechart
              data={[
                { name: "ST AGELUS", value: 400 },
                { name: "ST JOSEPH", value: 300 },
                { name: "ST PETERS", value: 200 },
              ]}
              COLORS={["#0088FE", "#00C49F", "#FF8042"]}
            />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="pr-6 flex items-center justify-between">
            <h3 className="text-2xl p-3">Admin Users</h3>
            <button className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md">
              Add
            </button>
          </div>
          <div className="h-64 px-4 py-4 overflow-y-auto w-full divide-y-[1px] divide-gray-100">
            {[10, 20, 30, 40].map((i) => (
              <div className="flex items-center py-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                  alt=""
                />
                <div className="flex flex-col ml-4">
                  <h2 className="font-bold">Admin Name Lastname</h2>
                  <p className="text-sm">useremail@gmail.com</p>
                </div>
                <div className="ml-auto mr-6 flex space-x-2">
                  <HiPencilAlt className="font-bold text-dodge-blue text-2xl cursor-pointer" />
                  <HiTrash className="font-bold text-red-400 text-2xl cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
