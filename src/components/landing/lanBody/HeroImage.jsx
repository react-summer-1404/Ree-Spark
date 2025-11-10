import React from "react";

function HeroImage() {
  return (

<>

  <div className="hidden lg:block  lg:flex-row lg:justify-center lg:absolute lg:w-[89px] lg:h-[89px] lg:top-[295px]">
    <img className="lg:absolute lg:left-[145px] lg:top-[40px] lg:rotate-[11deg]" src="../../../../public/AuthImage/html.png" />
    <img className="lg:absolute lg:left-[410px] lg:top-[40px] lg:rotate-[345deg]" src="../../../../public/AuthImage/css.png" />
    <img className="lg:absolute lg:left-[670px] lg:top-[40px] lg:rotate-[-1deg]" src="../../../../public/AuthImage/java.png" />
    <img className="lg:absolute lg:left-[940px] lg:top-[40px]" src="../../../../public/AuthImage/react.png" />
    <img className="lg:absolute lg:left-[1230px] lg:top-[40px] lg:rotate-[13deg]" src="../../../../public/AuthImage/figma.png" />
  </div>


  <div className=" lg:hidden flex flex-row justify-center relative w-[62.183835415005994px] h-[62.183835415005994px] right-[358px] top-[-3500px]">
    <img className="absolute left-[350px] top-[90px] rotate-[11deg]" src="../../../../public/AuthImage/html.png" />
    <img className="absolute left-[420px] top-[90px] rotate-[340deg]" src="../../../../public/AuthImage/css.png" />
    <img className="absolute left-[507px] top-[90px] rotate-[1deg]" src="../../../../public/AuthImage/java.png" />
    <img className="absolute left-[582px] top-[90px]" src="../../../../public/AuthImage/react.png" />
    <img className="absolute left-[662px] top-[90px] rotate-[18deg]" src="../../../../public/AuthImage/figma.png" />
  </div>
</>

  );
}

export default HeroImage;
