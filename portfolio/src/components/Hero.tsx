import { ShimmerButton } from "./ui/shimmer-button";
import data from "../Data/Data.json";

const Hero = () => {
  //handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_Ashraful Haque.pdf";
    link.download = "Ashraful_Haque_CV.pdf";
    link.click();
  };

  return (
    <div
      id="about"
      className="hero min-h-screen flex items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="hero-content flex-col lg:flex-row-reverse container mx-auto px-16">
        <img
          src={data.about.profileImg}
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-2xl ring-4 ring-primaryColor transition-all duration-500 ease-out hover:ring-8 hover:ring-primaryColor/60 hover:scale-105"
        />

        <div>
          <h3 className="text-3xl pb-5 text-primaryColor">Hi! I'm</h3>
          <h1 className="text-5xl font-bold text-textSecondary">
            {data.about.title}
          </h1>
          <p className="py-6 text-textPrimary font-light text-justify w-[90%] text-xl">
            {data.about.description}
          </p>

          <ShimmerButton className="shadow-2xl" onClick={handleDownload}>
            Download Resume
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
