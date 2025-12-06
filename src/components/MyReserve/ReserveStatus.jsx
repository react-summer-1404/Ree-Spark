

const ReserveStatus = ({
  title,
  AcceptReserve,
  ReserveImg,
  reserveBg,
  AcceptBg,MyReservePublisher
}) => {
  return (
    <div>
      <div className="h-16 flex relative">
        <div
          className={`w-[83px] h-[52px] rounded-xl ${reserveBg} absolute top-[72px] left-[971px]`}
        >
          <img
            src={`./images/${ReserveImg}.png`}
            className="size-[33px] mx-auto mt-2"
          />
        </div>
        <h3 className="h-[23px] absolute top-[86px] left-[869px] font-bold">
          {title}
        </h3>
        <h3 className="h-[20px] absolute top-[86px] left-[620px] font-semibold text-sm">
          {MyReservePublisher}
        </h3>
        <h3 className="h-[20px] absolute top-[86px] left-[447px] font-semibold text-sm">
          29 اردیبهشت 1403
        </h3>
        <h3 className="h-[20px] absolute top-[86px] left-[274px] font-semibold text-sm">
          29 اردیبهشت 1403
        </h3>
        <div
          className={`h-6 absolute top-[85px] left-[144px] ${AcceptBg} rounded-[32px] py-[2px] px-2 text-white text-sm`}
        >
          {AcceptReserve}
        </div>
      </div>
    </div>
  );
};

export { ReserveStatus };
