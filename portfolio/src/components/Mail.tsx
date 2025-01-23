const Mail = () => {
  return (
    <div className="flex md-mx:hidden  items-center gap-10 fixed bottom-32 -right-40 rotate-90">   
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a
          href="mailto:ashrafulhaque08@gmail.com"
          className="font-mono text-xs tracking-wide text-textPrimary hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
        >
          ashrafulhaque08@gmail.com
        </a>
      </div>
      <hr className="border w-40 rounded-full  bg-textPrimary border-textPrimary" />
    </div>
  );
};
export default Mail;
