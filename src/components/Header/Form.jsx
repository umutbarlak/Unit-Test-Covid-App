import React from "react";
import { CiSearch } from "react-icons/ci";

const Form = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center border rounded "
    >
      <input
        className=" bg-transparent outline-none px-2 md:px-5"
        type="text"
        placeholder="Ülke İsmine Göre Ara"
      />
      <button
        type="submit"
        className="p-2
     bg-green-500 w-full h-full text-xl"
      >
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
