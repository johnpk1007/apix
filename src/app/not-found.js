import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex w-full">
      <div className="bg-black grow h-screen"></div>
      <div className="container flex flex-col justify-center items-center max-w-screen-xl h-screen bg-black">
        <div className="flex flex-row xxs:w-[250px] xs:w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] aspect-[2/1] max-w-screen-xl">
          <div className="flex justify-center items-start w-[50%] h-full bg-black">
            <div className="relative w-[80%] aspect-square">
              <Image
                src="/images/faceless.png"
                alt="artist"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col h-full flex-1 bg-black">
            <div className="ml-[10px]">
              <div className="font-poppins font-bold xxs:text-[25px] xs:text-[30px] sm:text-[50px] md:text-[75px] lg:text-[100px] text-white">
                404
              </div>
              <div className="font-poppins font-extralight xxs:text-[10px] xs:text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px] text-slate-400">
                Page not found
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black grow h-screen"></div>
    </div>
  );
}
