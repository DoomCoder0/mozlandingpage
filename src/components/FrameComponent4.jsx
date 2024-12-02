import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch w-[314px] flex flex-row items-start justify-start py-2.5 px-[91px] box-border gap-[18px] z-[2] text-left text-16xl text-black font-helvetica-neue mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="ml-[-94px] self-stretch w-[76px] rounded-50xl bg-chocolate-100 flex flex-col items-center justify-center pt-1 px-0 pb-[3px] box-border shrink-0">
        <img
          className="w-[23px] h-[23px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/content.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
        <div className="relative leading-[100.2%] shrink-0 whitespace-nowrap mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
          LEARN MORE
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
