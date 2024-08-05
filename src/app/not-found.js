import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex w-full">
      <div className="bg-black grow h-screen"></div>
      <div className="container flex flex-col justify-center items-center max-w-screen-xl h-screen bg-black">
        <div className="flex flex-row h-[120px]w-[375px] max-w-screen-xl">
          <div className="flex justify-end items-start w-[50%] h-full bg-black">
            <div className="relative w-[150px] aspect-square mr-[60px]">
              <Image
                src="/images/faceless.png"
                alt="artist"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col h-full flex-1 bg-black">
            <div className="ml-[10px] mt-[20px]">
              <div className="font-poppins font-bold text-4xl text-white">
                404
              </div>
              <div className="font-poppins font-extralight text-lg text-slate-400">
                Page not found
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center h-[120px] w-[375px] max-w-screen-xl border-2">
          <div className="flex flex-row justify-end items-center w-[50%] h-full bg-black relative">
            <div className="flex flex-row items-center mr-[50px]">
              <div className="relative w-[30px] aspect-[7/5]">
                <Image
                  src="/images/youtube_logo_drawing.png"
                  alt="logo"
                  fill
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="relative w-[75px] aspect-[3/1]">
                <Image
                  src="/images/youtube_logo_text.png"
                  alt="logo"
                  fill
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
            <div className="absolute right-[-9px]">
              <div className="relative w-[18px] aspect-square">
                <Image
                  src="/images/apix_logo_white_drawing.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center h-full flex-1 bg-black">
            <div className="relative w-[135px] aspect-[5/1] ml-[50px]">
              <Image
                src="/images/billboard_logo_white_text.jpg"
                alt="logo"
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black grow h-screen"></div>
    </div>
  );
}
