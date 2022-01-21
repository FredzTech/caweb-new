import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

import prayers from "../data/prayers.json";

const PrayerDisclosure = ({ prayer: { title, prayer } }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-center text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="text-lg">{title}</span>
            <HiChevronUp
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-md tracking-wider leading-6 text-gray-500">
            {prayer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const Prayers = () => {
    console.log(prayers);
  return (
    <div className="container  py-14">
      <h1 className="text-3xl text-center text-dodge-blue font-bold">
        Catholic Prayers
      </h1>
      <div className="w-full space-y-5 max-w-2xl p-2 my-10 mx-auto rounded-2xl">
        {prayers.prayers.map((prayer) => (
          <PrayerDisclosure key={prayer.id} prayer={prayer} />
        ))}
      </div>
    </div>
  );
};

export default Prayers;
