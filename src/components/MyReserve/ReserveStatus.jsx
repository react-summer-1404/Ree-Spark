/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const ReserveStatus = ({
  title,
  AcceptReserve,
  ReserveImg,
  startDate,
  AcceptBg,
  MyReservePublisher,
  endDate,
}) => {
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="h-16 flex flex-col relative">
        <div
          className={`w-[83px] h-[52px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg  absolute left-[971px]`}
        >
          <img src={ReserveImg} className="w-full h-full mx-auto rounded-xl" />
        </div>
        <h3 className="h-[23px] absolute mt-3 left-[869px] font-bold">
          {title}
        </h3>
        <h3 className="h-[20px] absolute mt-3 left-[620px] font-semibold text-sm">
          {MyReservePublisher}
        </h3>
        <h3
          dir="rtl"
          className="h-[20px] absolute mt-3 left-[467px] font-semibold text-sm"
        >
          {startDate}
        </h3>
        <h3
          dir="rtl"
          className="h-[20px] absolute mt-3 left-[294px] font-semibold text-sm"
        >
          {endDate}
        </h3>
        <div
          className={`h-6 absolute mt-3 left-[144px] ${AcceptBg} rounded-[32px] py-[2px] px-2 text-white text-sm`}
        >
          {AcceptReserve}
        </div>
      </div>
    </motion.div>
  );
};

export { ReserveStatus };
