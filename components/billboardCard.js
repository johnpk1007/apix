import { Video } from "./video";

export const BillboardCard = ({ data }) => {
  const stringDot = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  };

  return (
    <div className="flex w-full h-[330px]">
      <div className="w-[100px] h-full bg-black border-black border-2" />
      <div className="flex justify-start w-[calc(100%-100px)] h-full border-b-2 border-neutral-300">
        <div className="flex flex-col w-[450px] bg-black">
          <div className="flex h-[200px]">
            <div className="h-full w-[350px]">
              <Video src={data.video} />
            </div>
            <div className="h-full w-[100px] flex justify-center items-center text-white font-poppins font-bold text-4xl">
              {data.this_week}
            </div>
          </div>
          <div className="h-[130px]">
            <div className="text-white font-roboto font-base text-2xl mt-3">
              {stringDot(`${data.title} - ${data.artist}`, 30)}
            </div>
            <div className="text-neutral-500 font-roboto font-base text-xl">
              {stringDot(`${data.artist}`, 40)}
            </div>
          </div>
        </div>
        <div className="flex w-[calc(100%-450px)]">
          <div className="w-1/4 h-[200px] flex flex-col justify-center items-start">
            <div className="ml-10">
              <div className="font-poppins font-black text-3xl">
                {stringDot(`${data.title}`, 20)}
              </div>
              <div className="font-poppins font-light text-3xl">
                {stringDot(`${data.artist}`, 20)}
              </div>
            </div>
          </div>
          <div className="w-1/4 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black text-3xl">
              {data.last_week}
            </div>
          </div>
          <div className="w-1/4 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black text-3xl">
              {data.peak_pos}
            </div>
          </div>
          <div className="w-1/4 h-[200px] flex justify-center items-center">
            <div className="font-poppins font-black text-3xl">
              {data.wks_on_chart}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
