import React from "react";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <div className="footer-wrapper bg-black h-[8rem] sm:h-[10rem] flex flex-col items-center justify-center relative">
      <img
        src={footer}
        className="grayscale h-[1.5rem] bottom-[4rem] left-[3rem] sm:h-[2.5rem] flex absolute sm:bottom-[5rem] sm:left-[15rem]"
      />
      <p className="text-white text-xs sm:text-lg absolute left-[3.3rem] bottom-[2.7rem] sm:left-[15.5rem] sm:bottom-[3rem] select-none">
        &#169; Bundl Technologies Pvt. Ltd.
      </p>
    </div>
  );
};

export default Footer;
