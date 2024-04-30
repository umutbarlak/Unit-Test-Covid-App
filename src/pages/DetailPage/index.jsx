import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/actions";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import InfoCard from "../../components/InfoCard";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay/index";
import HeaderLoader from "../../components/Loader/HeaderLoader";

const DetailPage = () => {
  const { country } = useParams();
  const { data, isLoading, isError } = useSelector((store) => store);

  const dispatch = useDispatch();

  const fetchData = () => dispatch(getData(country));

  useEffect(() => {
    fetchData();
  }, [country]);

  const covidData = Object.entries(data?.covid || {});

  return (
    <div
      className=" min-h-[calc(100vh-79px)] bg-zinc-800 grid
     place-items-center text-white p-6 "
    >
      <div className=" bg-gray-100 rounded-md shadow-lg p-8 max-w-3xl w-full mx-auto">
        <div className="flex justify-between items-center gap-3 mb-6">
          <Link
            to={"/"}
            className="flex gap-2 items-center rounded-lg hover:bg-gray-800 bg-gray-700 py-2 px-4"
          >
            <IoIosArrowBack /> Geri
          </Link>

          <div className="flex items-center space-x-2">
            {isLoading ? (
              <HeaderLoader />
            ) : (
              !isError && (
                <>
                  <img className="w-12 h-8" src={data?.country?.flags?.svg} />
                  <h1
                    data-testid="title"
                    className="text-3xl text-gray-900 font-semibold"
                  >
                    {data?.country?.name?.common}
                  </h1>
                </>
              )
            )}
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <ErrorDisplay retry={fetchData} message={isError} />
          ) : (
            covidData.map((item, i) => <InfoCard key={i} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
