import Image from "next/image";
import product1 from "@/public/assets/images/product1.png";
import product2 from "@/public/assets/images/product2.png";
import star from "@/public/assets/images/star.png";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 mb-20  sm:max-w-7xl sm:mx-auto">
      <div className="text-left md:text-left">
        <button className="px-6 py-1 rounded-md border-2 font-thin text-primary-50 sm:my-10 my-6">
          PRODUCTS
        </button>
        <div className="flex sm:flex-col md:flex-row gap-4 md:gap-2 items-center justify-between">
          <h2 className="text-primary-50 text-lg sm:text-3xl md:text-6xl sm:w-full md:w-[70%] font-inter w-[70%]">
            Experience the Power of Premium Models of AI
          </h2>
          <span className="mt-4 md:mt-0 sm:ml-[45%] md:ml-0">
            <Image src={star} alt="" className="w-12 sm:w-20" />
          </span>
        </div>
        <hr className=" mt-4 opacity-5" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:py-20 py-10">
        <h1 className="sm:w-1/2 font-bold text-white/80">
          {"Empowering Africa's Technology Revolution with Afro AI"}
        </h1>
        <p className="sm:w-1/2 text-sm text-white/80">
          {
            "Afro AI is dedicated to revolutionizing Africa's tech scene with innovative AI solutions.By understanding local nuances, we foster inclusive development and empower communities to thrive."
          }
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around sm:mt-12 h-auto gap-8">
        <ProductCard title="AFRO AI" image={product1} link={"/assistant"} />
        <ProductCard title="Campus Genie" image={product2} link={"/genie"} />
        <ProductCard title="Wise Nurse" image={product2} link={"/article"} />
      </div>
    </div>
  );
};

export default Products;
