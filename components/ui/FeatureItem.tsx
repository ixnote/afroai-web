import Image from "next/image";
import React from "react";
import plus1 from "@/public/assets/svgs/plus2.svg";
import plus2 from "@/public/assets/svgs/plus1.svg";

const FeatureItem = ({ text, active = false }: any) => (
  <div className="flex items-center gap-8 my-1">
    <Image
      src={active ? plus1 : plus2}
      alt="feature icon"
      className="w-6 h-6"
    />
    <p className="text-base">{text}</p>
  </div>
);

export default FeatureItem;
