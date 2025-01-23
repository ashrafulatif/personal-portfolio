import { ShimmerButton } from "./ui/shimmer-button";

const Hero = () => {
  //handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Ashraful_Haque_CV.pdf";
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
          src="/profile.jpeg"
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full shadow-2xl ring-4 ring-primaryColor transition-all duration-500 ease-out hover:ring-8 hover:ring-primaryColor/60 hover:scale-105"
        />

        <div>
          <h3 className="text-3xl pb-5 text-primaryColor">Hi! I'm</h3>
          <h1 className="text-5xl font-bold text-textSecondary">
            Ashraful Haque
          </h1>
          <p className="py-6 text-textPrimary font-light text-justify w-[90%] text-xl">
            I am a passionate software Engineer skilled in building efficient,
            scalable solutions, designing full-stack web applications, and
            delivering exceptional results. Let's collaborate to create
            innovative and impactful projects together!
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
