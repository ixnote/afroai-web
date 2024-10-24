import React from "react";
import Image, { StaticImageData } from "next/image";
import product1 from "@/public/assets/images/product1.png";
import arrow from "@/public/assets/images/arrowUp.png";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image: StaticImageData;
  link: string;
};

const ProductCard = ({ title, image, link }: ProductCardProps) => {
  return (
    <Link
      // href={`https://app.afrocentricai.org/${link}`}
      href={link}
      className="flex flex-col w-full md:w-full group cursor-pointer rounded-3xl overflow-hidden"
    >
      <div className="flex relative w-full">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="object-cover h-[450px] w-full"
        />
      </div>

      <div className="group flex w-full justify-between group-hover:bg-white py-4 px-4 transition duration-300 items-center">
        <div className="flex flex-col gap-3">
          {/* <h1 className=' hidden group-hover:block text-4xl font-semibold text-primary-50 group-hover:text-black transition duration-300'>
            Try
          </h1> */}
          <h2 className="py-2 flex justify-between items-center text-xl md:text-3xl font-inter text-primary-50 group-hover:text-black transition duration-300">
            {title}
          </h2>
        </div>
        <div className="flex border-2 rounded-[100px] p-2 h-[40px] w-[50px] justify-center items-center group-hover:bg-black">
          <Image
            src={arrow}
            alt=""
            className="h-[40px] w-[50px] border-slate-300"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
