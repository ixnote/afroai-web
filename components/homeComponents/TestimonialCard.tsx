import React from "react";
import Image from "next/image";

type TestimonialCard = {
  item: any;
};
function TestimonialCard({ item }: TestimonialCard) {
  return (
    // <div className=' flex flex-col min-w-[400px] max-w-[300px] gap-6  p-6 border-2 border-gray-600 rounded-lg mx-2'>
    <div className=" flex flex-col min-w-[430px] max-w-[300px] gap-6  p-6 border-2 border-gray-600 rounded-lg mx-2">
      <Image src={item.src} alt={item.alt} width={90} />
      <div className="flex flex-col justify-between h-full">
        <p className="text-primary-50 text-[20px]">{item.text}</p>
        <div className="flex flex-col mt-6">
          <p className="text-primary-50 font-bold text-lg">{item.author}</p>
          <p className="text-primary-50  text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
