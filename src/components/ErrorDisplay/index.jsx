import { IoMdWarning } from "react-icons/io";

const ErrorDisplay = ({ message, retry }) => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[60vh] col-span-3">
      <div className=" flex items-center gap-3 bg-red-500 rounded-md p-5">
        <IoMdWarning className=" text-3xl" />
        <div>
          <h2>Üzgünüz bir hata oluştu</h2>
          <p>{message}</p>
        </div>
      </div>
      <button
        onClick={retry}
        className=" mt-2 border transition p-2 rounded-md text-gray-600 bg-gray-300"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default ErrorDisplay;
