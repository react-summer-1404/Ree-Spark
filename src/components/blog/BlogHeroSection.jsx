import React from "react";
import { BlogSort } from "./components/blogSort/BlogSort";

const BlogHeroSection = () => {
  return (
    <div>
      <div className="w-full sm:w-[400px] m-auto mt-20 flex flex-col gap-6">
        <h1 className="text-[39px] text-center font-bold w-[304px] m-auto sm:w-[400px] dark:text-white">
          اطلاعات بیشتر ، درک بهتر
        </h1>
        <h5 className="text-[#707070] w-[300px] m-auto text-center dark:text-slate-300">
          ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید بیشتر
          میکنیم
        </h5>
      </div>
      <div>
        <BlogSort/>
      </div>
    </div>
  );
};

export { BlogHeroSection };