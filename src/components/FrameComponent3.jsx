import Component1 from "./Component1";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1539px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-16xl text-gray-200 font-helvetica ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
        <div className="w-[398px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[25.5px] max-w-full">
            <div className="relative leading-[100.2%] inline-block max-w-full mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
              500 Terry Francine St.
            </div>
            <div className="relative leading-[100.2%] mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
              San Francisco, CA 94158
            </div>
            <div className="relative leading-[100.2%] mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
              +145-568-378
            </div>
          </div>
        </div>
        <Component1 />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
