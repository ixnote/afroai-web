import Image from 'next/image';
import product1 from '@/public/assets/images/product1.png';
import product2 from '@/public/assets/images/product2.png';
import star from '@/public/assets/images/star.png';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-16 mb-20  max-w-7xl mx-auto'>
      <div className='text-center md:text-left'>
        <button className='px-6 py-1 rounded-md border-2 font-thin text-primary-50 my-10'>
          PRODUCTS
        </button>
        <div className='flex flex-col md:flex-row gap-4 md:gap-2'>
          <h2 className='text-primary-50 text-3xl md:text-6xl w-full md:w-[70%] font-inter'>
            EXPERIENCE THE POWER OF AFRO INTELLIGENCE
          </h2>
          <span className='mt-4 md:mt-0 ml-[45%] md:ml-0'>
            <Image src={star} alt='' width={60} />
          </span>
        </div>
        <hr className=' mt-4 opacity-5' />
      </div>
      <div className='flex w-full py-20'>
        <h1 className='w-1/2 font-bold'>
          {"Empowering Africa's Technology Revolution with Afro AI"}
        </h1>
        <p className='w-1/2 text-sm text-white/80'>
          {
            "Afro Intelligence is dedicated to revolutionizing Africa's tech scene with innovative AI solutions.By understanding local nuances, we foster inclusive development and empower communities to thrive."
          }
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-around mt-12 h-auto gap-8'>
        <ProductCard title='AI Assistant' image={product1} />
        <ProductCard title='Campus Genie' image={product2} />
      </div>
    </div>
  );
};

export default Products;
