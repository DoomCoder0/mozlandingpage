import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`w-[1624px] flex flex-row items-end justify-between pt-0 pb-[123px] pl-0 pr-5 box-border gap-5 max-w-full text-left text-9xl text-gray-200 font-abhaya-libre ${className}`}
    >
      <img
        className="w-[339px] relative max-h-full object-cover max-w-full z-[2]"
        alt=""
        src="/vector-1@2x.png"
      />
      <div className="h-[57px] w-[621px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full mq1125:w-[81px]">
        <div className="w-[540px] flex-1 flex flex-row items-start justify-between gap-5 max-w-full mq1125:hidden">
          <div className="self-stretch relative leading-[100.2%] font-semibold z-[2]">
            London, United Kingdom
          </div>
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 font-akaya-telivigala">
            <div className="relative leading-[100.2%] font-medium z-[2]">
              ABOUT US
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
        <button className="cursor-pointer [border:none] pt-[18.5px] pb-[17.5px] pl-[30px] pr-[29px] bg-chocolate-100 rounded-50xl flex flex-row items-start justify-start z-[2] hover:bg-chocolate-200">
          <div className="relative text-lg leading-[100.2%] font-abeezee text-gray-200 text-left inline-block min-w-[89px]">
            CONTACT
          </div>
        </button>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
