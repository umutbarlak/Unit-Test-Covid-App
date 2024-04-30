import React from "react";

const HeaderLoader = () => {
  return (
    <div
      data-testid="header-loader"
      className=" flex items-center gap-2 w-[161px] h-[48px]"
    >
      <div className="w-12 h-8 bg-gray-500 rounded-md" />
      <h1 className="p-2 bg-gray-900 w-32  rounded-lg"></h1>
    </div>
  );
};

export default HeaderLoader;
