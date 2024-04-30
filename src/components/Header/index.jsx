import { FaVirusCovid } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/detail/${text}`);
  };

  return (
    <header className=" flex items-center justify-between bg-zinc-900 text-white py-5 px-10 md:px-20 ">
      <Link to={"/"} className=" flex items-center gap-3">
        <FaVirusCovid className=" text-green-500 text-xl" />
        <h1 className=" font-mono font-semibold text-lg md:text-2xl whitespace-nowrap">
          COVİD Tracker
        </h1>
      </Link>

      <Form handleSubmit={handleSubmit} />

      <div className="max-md:hidden flex items-center gap-2">
        <div className="text-sm">
          <p>Vaccinated Today</p>
          <p className=" float-end text-gray-400">(123,345)</p>
        </div>
        <TbVaccine className=" text-xl text-green-500" />
      </div>
    </header>
  );
};

export default Header;
