'use client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { IoLogoApple } from 'react-icons/io5';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Valid email address is required' }),
  password: z.string(),
});

const Signup = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='flex flex-col w-full h-full items-center justify-center p-6 bg-[#1d1d1d]'>
      <div className='flex flex-col justify-center items-center h-full w-full gap-10'>
        <div className='flex flex-col justify-center items-center text-white gap-10'>
          <div className=' relative w-[56px] h-[40px] '>
            <Link href={'/'}>
              <Image src='/assets/images/afroaiLogo.svg' alt='logo' fill />
            </Link>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className=' font-medium text-3xl'>Sign up with free trial</h1>
            <p className=' font-normal text-lg text-center'>
              Empower your experience, Sign up for a free trial
            </p>
          </div>
        </div>
        <div className='flex flex-col w-full items-center text-white'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-6 w-full sm:px-16 px-4'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter email address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className=' bg-white text-black w-full sm:h-[50px] text-lg'
              >
                GET STARTED
              </Button>
              <div className='flex justify-center items-center'>
                <p className=''>
                  Already have an account?{' '}
                  <Link href='/login' className='font-medium'>
                    Login
                  </Link>
                </p>
              </div>
              <div className='flex justify-center items-center w-full h-[0.5px] bg-slate-300 '>
                <span className=' bg-black p-2'>Or</span>
              </div>
              <div className='flex flex-col items-center justify-center gap-4'>
                <Button
                  type='submit'
                  className='flex gap-3 bg-slate-800 w-full h-[50px] hover:bg-black'
                >
                  <FcGoogle size={25} /> CONTINUE WITH GOOGLE
                </Button>
                <Button
                  type='submit'
                  className='flex gap-3 bg-slate-800 w-full h-[50px] hover:bg-black'
                >
                  <IoLogoApple size={25} /> CONTINUE WITH APPLE
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div>
        <h1 className=' text-white'>powered by Blathium Technologies</h1>
      </div>
    </div>
  );
};

export default Signup;
