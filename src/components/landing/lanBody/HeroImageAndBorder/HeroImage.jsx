import React from "react";
import { HeroImageResponsive } from "../Respansive/HeroImageResponsive";
const HeroImage =() => {
  return (
    <>
    
    <HeroImageResponsive/>



      {/* // {desktop} // */}
      <div className="hidden lg:block xl:hidden lgg:hidden  lg:flex-row lg:justify-center lg:absolute lg:w-[89px] lg:h-[89px] lg:top-[305px] lg:left-[128px] lgg:left-[110px]">
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
          className="lg:absolute lg:left-[1024px] lg:top-[40px]  xl:left-[1067px] xl:top-[40px]  lgg:left-[1067px] lgg:top-[40px] lg:rotate-[13deg]"
          src="../../../../public/AuthImage/figma.png"
        />
      </div>

  <div className="hidden lgg:block xl:hidden lg:hidden lgg:flex-row lgg:justify-center lgg:absolute lgg:w-[89px] lgg:h-[89px] lgg:top-[305px] lgg:left-[135px]">
  <img
    className="lgg:absolute lgg:left-[75px] lgg:top-[40px] lgg:rotate-[11deg]"
    src="/AuthImage/html.png"
  />

  <img
    className="lgg:absolute lgg:left-[293px] lgg:top-[40px] lgg:rotate-[345deg]"
    src="/AuthImage/css.png"
  />

  <img
    className="lgg:absolute lgg:left-[540px] lgg:top-[40px] lgg:rotate-[-1deg]"
    src="/AuthImage/java.png"
  />

  <img
    className="lgg:absolute lgg:left-[800px] lgg:top-[40px]"
    src="/AuthImage/react.png"
  />

  <img
    className="lgg:absolute lgg:left-[1067px] lgg:top-[40px] lgg:rotate-[13deg]"
    src="/AuthImage/figma.png"
  />
</div>

 </>
  )
}

export default HeroImage;
