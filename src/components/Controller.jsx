import React from "react";

const Controller = ({ onSortAsc, onSortDesc, onSubmit, activeCard }) => {
  return (
    <div className="flex">
      <div className=" p-8 max-w-sm flex rounded-md h-full dark:bg-gray-800 bg-zinc-200  flex-col">
        <p className="mb-5  text-4xl font-medium text-gray-900 ">Controls</p>
        <div className="flex">
          <button
            className="py-2.5 px-5 me-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            onClick={() => onSortAsc()}
          >
            SORT ASC
          </button>
          <button
            className="py-2.5 px-5 me-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            onClick={() => onSortDesc()}
          >
            SORT DESC
          </button>
        </div>
        <div className="">
          <button
            disabled={!activeCard.realName}
            className={` rounded-lg border border-gray-200 py-2.5 px-5 me-24 mb-2 text-sm font-medium text-gray-900 focus:outline-none  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 
          ${
            !activeCard.realName
              ? "bg-gray-300"
              : "bg-white  hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          } `}
            onClick={() => onSubmit()}
            id="btn"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
