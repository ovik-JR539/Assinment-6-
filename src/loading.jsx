const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#15171D]">
      <div className="text-center">
        <div className="loading loading-spinner loading-lg text-[#C2F800]"></div>

        <h2 className="mt-4 text-xl font-bold text-white">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;