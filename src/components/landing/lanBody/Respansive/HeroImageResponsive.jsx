import React from "react";
import { motion } from "framer-motion";
const icons = [
  {
    src: "/AuthImage/html.png",
    style: "xl:absolute xl:left-[145px] xl:top-[350px] xl:rotate-[11deg]",
    floatDelay: 0,
  },
  {
    src: "/AuthImage/css.png",
    style: "xl:absolute xl:left-[410px] xl:top-[350px] xl:rotate-[345deg]",
    floatDelay: 0.2,
  },
  {
    src: "/AuthImage/java.png",
    style: "xl:absolute xl:left-[673px] xl:top-[350px] xl:rotate-[-1deg]",
    floatDelay: 0.4,
  },
  {
    src: "/AuthImage/react.png",
    style: "xl:absolute xl:left-[940px] xl:top-[350px]",
    floatDelay: 0.6,
  },
  {
    src: "/AuthImage/figma.png",
    style: "xl:absolute xl:left-[1230px] xl:top-[350px] xl:rotate-[13deg]",
    floatDelay: 0.8,
  },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
const HeroImageResponsive = () => {
  return (
    <>
      {/* {Xl Desktop} */}
      <div className="hidden xl:block lg:hidden xl:flex-row xl:justify-center xl:w-[89px] xl:h-[89px] ">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className={`absolute ${icon.style}`}
            animate={floatAnimation.animate}
            transition={{
              ...floatAnimation.transition,
              delay: icon.floatDelay,
            }}
          >
            <img
              src={icon.src}
              className="w-[95.78px] h-[95.78px]"
              alt={`icon-${index}`}
            />
          </motion.div>
        ))}
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
  );
};

export { HeroImageResponsive };
