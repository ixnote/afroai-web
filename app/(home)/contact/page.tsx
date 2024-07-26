import Image from 'next/image';
import logo from '@/public/assets/svgs/about.svg';
import arrow1 from '@/public/assets/images/arrowUp.png';
import plus from '@/public/assets/svgs/contactPlus.svg';

const Contact = () => {
  return (
    <div>
      <section className='h-auto min-h-[600px] md:min-h-[800px] py-20 lg:py-20 text-primary-50 max-w-7xl mx-auto'>
        <button className='border px-4 lg:px-10 py-2 font-thin flex gap-2 items-center rounded-lg'>
          <Image src={logo} alt='' />
          <h2 className='flex gap-2'>
            {' '}
            <span>/</span>CONTACT
          </h2>
        </button>

        <div className='flex flex-col md:flex-row mt-8 gap-8 '>
          <div className='w-full md:w-3/5'>
            <p className='text-primary-50 mt-4 font-inter text-3xl md:text-5xl lg:text-7xl'>
              REACH OUT TO AFRO AI TODAY
            </p>
          </div>
          <div className='w-full md:w-3/4 pb-4 font-inter'>
            <form className='flex flex-wrap gap-8 justify-center md:justify-start'>
              <div className='flex w-full md:w-full gap-8 '>
                <label
                  htmlFor='fullName'
                  className='flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2'
                >
                  Full Name
                  <input
                    type='text'
                    id='fullName'
                    className='bg-black border-b-2 w-full'
                  />
                </label>
                <label
                  htmlFor='email'
                  className='flex flex-col items-center md:items-start gap-2 text-primary-50 w-full md:w-1/2'
                >
                  Email
                  <input
                    type='email'
                    id='email'
                    className='bg-black border-b-2 w-full'
                  />
                </label>
              </div>
              <label
                htmlFor='subject'
                className='flex flex-col items-center md:items-start gap-2 text-primary-50 w-full'
              >
                Subject
                <textarea
                  id='subject'
                  cols={80}
                  className=' bg-black border-b-2 w-full'
                />
              </label>
              <label
                htmlFor='message'
                className='flex flex-col  items-center md:items-start gap-2 text-primary-50 w-full'
              >
                Message
                <textarea
                  id='message'
                  cols={80}
                  className='bg-black py-8 md:py-10 border-b-2 w-full'
                />
              </label>
            </form>
          </div>
        </div>
        <button className='border ml-[38%] md:ml-[45%]  px-4 lg:px-16 py-2 mt-10 rounded-lg border-primary-50 text-black bg-primary-50'>
          Submit
        </button>
        <hr className='mt-16 opacity-50' />
      </section>
      <section className='h-auto min-h-[600px] py-4  lg:py-4  text-primary-50 max-w-7xl mx-auto'>
        <button className='border px-4 lg:px-10 py-2 rounded-lg font-thin border-primary-50 text-primary-50'>
          FAQS
        </button>
        <div className='flex flex-col md:flex-row  gap-8'>
          <div className='w-full md:w-3/6'>
            <p className='text-primary-50 mt-4 font-inter text-3xl md:text-5xl lg:text-7xl'>
              EXPLORE COMMON QUESTIONS
            </p>
          </div>
          <div className=' border-l-2 h-80 md:h-80'>
            <div className=' px-8 w-3/4 md:w-3/4 mx-8 '>
              <div className='flex  items-center justify-between'>
                <p className='py-5'>
                  How can I get started with Afro AI&apos;s services?
                </p>
                <Image src={plus} alt='' width={30} />
              </div>
              <hr />
              <div className='flex  items-center justify-between'>
                <p className='py-5'>
                  What makes Afro AI&apos;s solutions unique compared to other
                  AIplatforms?
                </p>
                <Image src={plus} alt='' width={30} />
              </div>
              <hr />
              <div className='flex  items-center justify-between'>
                <p className='py-5'>
                  Is there a free trial available for Afro AI&apos;s services?
                </p>
                <Image src={plus} alt='' width={30} />
              </div>
              <hr />
              <div className='flex  items-center justify-between'>
                <p className='py-5'>
                  How can I get contact Afro AI&apos;s support team for
                  assistance?
                </p>
                <Image src={plus} alt='' width={30} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-primary-100 py-8 lg:py-14'>
          <div className='flex flex-col md:flex-row items-center justify-around '>
            <div className='w-full md:w-3/5 text-center md:text-left'>
              <h2 className='text-3xl md:text-5xl text-black'>
                READY TO MOVE FASTER?
              </h2>
              <p className='mt-8 text-sm md:text-base text-black lg:text-lg'>
                Ready to accelerate your progress? Experience the speed and
                efficiency of Afro AI. Try it now and unleash the potential of
                tailored AI solutions.
              </p>
            </div>

            <button className='flex items-center mt-3 font-inter text-xl justify-center gap-2 text-primary-50 hover:bg-primary-50 hover:text-black  bg-black  w-3/4 max-w-xs md:max-w-sm h-16 rounded-xl px-4'>
              TRY AI
              <span className=' hover:text-black'>
                <Image src={arrow1} alt='Arrow' width={25} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
