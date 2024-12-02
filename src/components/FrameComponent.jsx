import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1551px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-16xl text-gray-200 font-abeezee ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[198px] max-w-full mq800:gap-[49px] mq450:gap-[25px] mq1300:gap-[99px] mq1300:flex-wrap">
        <div className="w-[612px] flex flex-col items-start justify-start gap-[413px] max-w-full mq800:gap-[206px] mq800:min-w-full mq450:gap-[103px] mq1300:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] mq800:gap-[18px]">
            <div className="relative leading-[100.2%] mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
              <span>{`OUR `}</span>
              <span className="text-chocolate-100">EXPERTISE</span>
            </div>
            <div className="relative text-26xl leading-[100.2%] text-chocolate-100 mq800:text-17xl mq800:leading-[36px] mq450:text-8xl mq450:leading-[27px]">
              Reliable connection between AI and construction
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-px pr-5 font-akaya-telivigala">
            <div className="relative leading-[100.2%] font-medium mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
              OUR PROJECTS
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[480px] max-w-full text-37xl font-akaya-telivigala mq800:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[158px] max-w-full mq800:gap-[79px] mq450:gap-[39px]">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[707px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[45px] max-w-full mq800:gap-[22px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[9.1px] max-w-full">
                    <h2 className="m-0 w-[540px] relative text-inherit leading-[100.2%] font-medium font-[inherit] inline-block max-w-full mq800:text-26xl mq800:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                      Artifical Intelligence
                    </h2>
                    <h2 className="m-0 w-[540px] relative text-inherit leading-[100.2%] font-medium font-[inherit] inline-block max-w-full mq800:text-26xl mq800:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                      Renovation
                    </h2>
                    <h2 className="m-0 w-[540px] relative text-inherit leading-[100.2%] font-medium font-[inherit] inline-block max-w-full mq800:text-26xl mq800:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                      Premium amenities
                    </h2>
                    <h2 className="m-0 self-stretch relative text-inherit leading-[100.2%] font-medium font-[inherit] mq800:text-26xl mq800:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                      Premium environment
                    </h2>
                    <h2 className="m-0 self-stretch relative text-inherit leading-[100.2%] font-medium font-[inherit] mq800:text-26xl mq800:leading-[45px] mq450:text-15xl mq450:leading-[34px]">
                      Residential construction
                    </h2>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[18px] text-16xl font-abeezee">
                  <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                    <div className="relative leading-[100.2%] mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
                      Learn more
                    </div>
                  </div>
                  <img
                    className="h-11 w-11 relative"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[18px] text-16xl font-abeezee">
              <div className="relative leading-[100.2%] mq800:text-9xl mq800:leading-[28px] mq450:text-2xl mq450:leading-[21px]">
                VIEW ALL
              </div>
              <img
                className="h-[27px] w-[27px] relative"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
