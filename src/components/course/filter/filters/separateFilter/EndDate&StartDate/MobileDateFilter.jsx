import React from "react";
import DatePicker from "react-multi-date-picker";

const MobileDateFilter = ({
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
    <div className="w-[258px] h-[80px] top-[100px] left-[20px] gap-2 mt-4 relative ">
      <div className="w-[157px] h-[24px] gap-2 absolute float-right flex ml-[176px]">
        <h3 className="w-[125px] h-[23px]  text-[15px] font-medium leading-5 text-right ">
          تاریخ برگزاری - اتمام
        </h3>
        <img
          src="../../../../../../../public/AuthImage/calendar-02-stroke-rounded 2.png"
          className="w-[24px] h-[24px]"
        />
      </div>

      <DatePicker
        range
        value={[
          startDate ? new Date(startDate) : null,
          endDate ? new Date(endDate) : null,
        ]}
        onChange={handleChange}
        format="YYYY-MM-DD"
        inputClass="w-[345px] h-[48px] rounded-[16px] bg-[#F1F1F1] text-[#707070]  cursor-pointer p-4 text-right mt-[35px]"
        className=" bg-[#F1F1F1] dark:bg-slate-700 absolute left-[50px]"
        placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
      />
    </div>
  );
};

export default MobileDateFilter;
