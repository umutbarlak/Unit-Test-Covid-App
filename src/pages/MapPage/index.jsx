import { useState } from "react";
import Map from "../../components/Map";
import { useSelector } from "react-redux";

const MapPage = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className=" h-[calc(100vh-79px)]   bg-zinc-800 flex flex-col items-center text-white">
      <h2 className=" self-start p-5">
        Detayları Görüntüle:{" "}
        <span className="text-green-500 text-xl font-semibold">
          {tooltipContent}
        </span>
      </h2>
      <Map setTooltipContent={setTooltipContent} />
    </div>
  );
};

export default MapPage;
