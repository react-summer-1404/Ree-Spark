import React from "react";
import { HeroImageResponsive } from "../Respansive/HeroImageResponsive";
const HeroImage =() => {
  return (
    <>
    
    <HeroImageResponsive/>



      {/* // {desktop} // */}
      <div className="hidden lg:block xl:hidden  lg:flex-row lg:justify-center lg:absolute lg:w-[89px] lg:h-[89px] lg:top-[285px] lg:left-[58px]">
        <img
          className="lg:absolute lg:left-[75px] lg:top-[40px] lg:rotate-[11deg]"
          src="../../../../public/AuthImage/html.png"
        />
        <img
          className="lg:absolute lg:left-[293px] lg:top-[40px] lg:rotate-[345deg]"
          src="../../../../public/AuthImage/css.png"
        />
        <img
          className="lg:absolute lg:left-[540px] lg:top-[40px] lg:rotate-[-1deg]"
          src="../../../../public/AuthImage/java.png"
        />
        <img
          className="lg:absolute lg:left-[800px] lg:top-[40px]"
          src="../../../../public/AuthImage/react.png"
        />
        <img
          className="lg:absolute lg:left-[1067px] lg:top-[40px] lg:rotate-[13deg]"
          src="../../../../public/AuthImage/figma.png"
        />
      </div>

 </>
  )
}

export default HeroImage;
