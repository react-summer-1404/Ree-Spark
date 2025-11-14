import React from 'react'

const  HeroImageResponsive = ()=> {
  return (
    <>
           {/* {Xl Desktop} */}
      <div className="hidden xl:block lg:hidden xl:flex-row xl:justify-center xl:absolute xl:w-[89px] xl:h-[89px] xl:top-[295px]">
        <img
          className="xl:absolute xl:left-[145px] xl:top-[40px] xl:rotate-[11deg]"
          src="../../../../public/AuthImage/html.png"
        />
        <img
          className="xl:absolute xl:left-[410px] xl:top-[40px] xl:rotate-[345deg]"
          src="../../../../public/AuthImage/css.png"
        />
        <img
          className="xl:absolute xl:left-[673px] xl:top-[40px] xl:rotate-[-1deg]"
          src="../../../../public/AuthImage/java.png"
        />
        <img
          className="xl:absolute xl:left-[940px] xl:top-[40px]"
          src="../../../../public/AuthImage/react.png"
        />
        <img
          className="xl:absolute xl:left-[1230px] xl:top-[40px] xl:rotate-[13deg]"
          src="../../../../public/AuthImage/figma.png"
        />
      </div>

      {/* // {mobule} // */}
      <div className=" lg:hidden flex flex-row justify-center relative w-[62.183835415005994px] h-[62.183835415005994px] right-[358px] top-[-3520px]">
        <img
          className="absolute left-[350px] top-[90px] rotate-[11deg]"
          src="../../../../public/AuthImage/html.png"
        />
        <img
          className="absolute left-[420px] top-[90px] rotate-[340deg]"
          src="../../../../public/AuthImage/css.png"
        />
        <img
          className="absolute left-[507px] top-[90px] rotate-[1deg]"
          src="../../../../public/AuthImage/java.png"
        />
        <img
          className="absolute left-[582px] top-[90px]"
          src="../../../../public/AuthImage/react.png"
        />
        <img
          className="absolute left-[662px] top-[90px] rotate-[18deg]"
          src="../../../../public/AuthImage/figma.png"
        />
      </div>
    </>
  
    
  )
}

export  {HeroImageResponsive}
