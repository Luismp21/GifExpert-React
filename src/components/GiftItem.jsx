import React from "react";

export const GiftItem = ({ title, id, url }) => {
  return (
    <div
      className="flex flex-col self-center justify-center rounded-xl border-4 my-4 border-gray-900 shadow-2xl
      transition ease-in-out delay-150  hover:scale-105 duration-300 "
    >
      <img className="max-w-lg max-h-96" src={url} alt={title} />
      <div className="bg-white flex justify-center rounded-md">
        <p className="text-center w-80 text-xl font-bold capitalize hover:text-teal-400 cursor-pointer ">
          {title}
        </p>
      </div>
    </div>
  );
};
