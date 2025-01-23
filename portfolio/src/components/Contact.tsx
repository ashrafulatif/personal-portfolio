import { ShimmerButton } from "./ui/shimmer-button";

const Contact = () => {
  // sendMail function
  const sendMail = () => {
    window.location.href = "mailto:ashrafulhaque08@gmail.com";
  };

  return (
    <div id="contact"
      className="hero py-20 flex items-center justify-center"
      data-aos="fade-up" data-aos-duration="800"
    >
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-textSecondary">
            Get In Touch
          </h1>
          <p className="py-6 text-textPrimary">
            "I’m always excited to explore new opportunities and connect with
            like-minded individuals. Whether you have a project in mind or a
            question, feel free to reach out, I’d love to hear from you!"
          </p>
          <div className="flex justify-center">
            <ShimmerButton className="shadow-2xl" onClick={sendMail}>
              Say Hi!
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
