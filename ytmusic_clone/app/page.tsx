import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pink-300 h-[750px] w-[750px] flex flex-col justify-end items-start gap-4">
      <div className="flex h-64 w-64 cursor-auto items-center justify-center bg-black text-[50px] font-[100px] text-pink-600">
            111
      </div>
      
      <div className="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-[50px] font-[100px] text-pink-600">
            222
      </div>
    </div>
  );
}
