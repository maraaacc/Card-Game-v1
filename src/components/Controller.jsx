import React from "react";
import { useState } from "react";

const Controller = () => {
  return (
    <div className="">
      <div className=" p-4 max-w-sm flex rounded-lg h-full dark:bg-gray-800 bg-zinc-200 p-8 flex-col">
        <p className="text-sm font-medium text-gray-900">Controls</p>
        <div className="flex">
          <button className="py-2.5 px-5 me-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">
            SORT ASC
          </button>
          <button className="py-2.5 px-5 me-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">
            SORT DESC
          </button>
        </div>
        <button className="py-2.5 px-5 me-24 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Controller;
