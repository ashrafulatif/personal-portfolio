import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Spinning Circle */}
      <div className="relative animate-[ping_1.5s_ease-in-out_1_2.5s]">
        <RingLoader size={100} color="#63ffda" />

        <span className="absolute inset-0 flex items-center justify-center text-primaryColor text-5xl font-mono font-light">
          A
        </span>
      </div>
    </div>
  );
};

export default Loader;
