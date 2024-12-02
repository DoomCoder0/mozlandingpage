import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent from "./components/FrameComponent";
import FrameComponent3 from "./components/FrameComponent3";

const Content = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[54px] pb-[422px] pl-[60px] pr-0 box-border gap-[249px] leading-[normal] tracking-[normal] mq450:gap-[62px] mq1125:gap-[124px] mq1125:pl-[30px] mq1125:box-border">
      <section className="w-full h-[1032px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          alt=""
          src="/vector@2x.png"
        />
      </section>
      <div className="w-[1728px] h-[1117px] relative hidden max-w-full z-[1]" />
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="w-[1607px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-left text-38xl text-gray-200 font-abhaya-libre">
        <div className="flex-1 flex flex-col items-start justify-start gap-[77.5px] max-w-full mq800:gap-[39px] mq450:gap-[19px]">
          <FrameComponent />
          <div className="self-stretch flex flex-col items-end justify-start gap-[52px] max-w-full mq800:gap-[26px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq800:gap-[19px]">
              <div className="self-stretch h-[1540px] relative max-w-full">
                <img
                  className="absolute top-[0px] left-[489px] w-[1112px] h-[814px] object-cover"
                  alt=""
                  src="/vector-4@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] w-[459px] flex flex-col items-start justify-start gap-[227px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full">
                      <img
                        className="self-stretch h-[573px] relative max-w-full overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/vector-5@2x.png"
                      />
                      <h2 className="m-0 relative text-inherit leading-[101%] font-semibold font-[inherit] mq800:text-27xl mq800:leading-[46px] mq450:text-15xl mq450:leading-[35px]">
                        GREEN FLAT APARTMENTS
                      </h2>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[573px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector-6@2x.png"
                  />
                </div>
                <div className="absolute top-[859px] left-[489px] w-[1112px] flex flex-col items-start justify-start gap-[45px] max-w-full">
                  <h2 className="m-0 w-[726px] relative text-inherit leading-[100.2%] font-semibold font-[inherit] inline-block max-w-full mq800:text-27xl mq800:leading-[46px] mq450:text-15xl mq450:leading-[34px]">
                    NORTHWICH WATER LINE
                  </h2>
                  <img
                    className="self-stretch h-[420px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/vector-7@2x.png"
                  />
                  <h2 className="m-0 w-[730px] relative text-inherit leading-[100.2%] font-semibold font-[inherit] inline-block max-w-full mq800:text-27xl mq800:leading-[46px] mq450:text-15xl mq450:leading-[34px]">
                    TRAFORD RESIDENTIAL BUILDING
                  </h2>
                </div>
              </div>
              <div className="w-[480px] flex flex-row items-start justify-start py-0 pl-px pr-5 box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit leading-[100.2%] font-semibold font-[inherit] inline-block max-w-full mq800:text-27xl mq800:leading-[46px] mq450:text-15xl mq450:leading-[34px]">
                  LUX SKYLINE
                </h2>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/vector-8@2x.png"
            />
          </div>
          <FrameComponent3 />
        </div>
      </section>
    </div>
  );
};

export default Content;
