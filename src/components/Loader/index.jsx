const Loader = () => {
  const arr = new Array(16).fill("a");

  return (
    <>
      {arr.map((i, index) => (
        <div
          data-testid="card-loader"
          key={index}
          className=" h-[88px] min-w-[219px] bg-gray-200 p-4 rounded-lg shadow-md text-gray-600 animate-pulse "
        >
          <p className="mb-2 bg-gray-600 p-2 rounded-lg w-24"></p>
          <p className="mt-2 bg-gray-800 p-2 w-40 rounded-lg "></p>
        </div>
      ))}
    </>
  );
};

export default Loader;
