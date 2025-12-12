import React from "react";
// import DatePicker from "react-multi-date-picker";


const BlogDateFilter = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  mode = "range",
}) => {
  const handleChange = (value) => {
    if (mode === "single") {
      setStartDate(value?.toDate() || null);
      return;
    }

    if (mode === "range" && value && value.length === 2) {
      setStartDate(value[0].toDate());
      setEndDate(value[1].toDate());
    }
  };

  return (
    <div className="w-[258px] h-[80px] bottom-[60px] m-auto relative ">
      

      {/* <DatePicker
        range
        value={[
          startDate ? new Date(startDate) : null,
          endDate ? new Date(endDate) : null,
        ]}
        onChange={handleChange}
        format="YYYY-MM-DD"
        inputClass="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] text-[#707070]  cursor-pointer p-4 text-right mt-14 ml-[20px]"
        className=" lg:h-[308px]  lg:rounded-[16px] lg:top-[3px] lg:left-[5px] cursor-pointer lg:bg-[#F1F1F1] lg:absolute  lg:text-[#707070] lg:font-medium lg:text-[14px] lg:p-4 lg:text-right dark:bg-slate-700"
        placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
      /> */}
    </div>
  );
};

export default BlogDateFilter;
