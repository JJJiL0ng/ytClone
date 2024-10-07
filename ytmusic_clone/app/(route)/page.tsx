import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-sky-500 h-[1000px] w-[1000px] flex flex-low justify-center items-ceter gap-0">
      <div className="flex h-64 w-64 cursor-auto items-center justify-center bg-black text-[50px] font-[100px] text-blue-600">
            hello
      </div>
      
      <div className="flex h-64 w-64 cursor-pointer items-center justify-center bg-black text-[50px] font-[100px] text-orange-500">
            it is me
      </div>
    </div>
  );
}
