import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/sharedComponents/Navbar';
import Footer from '@/components/sharedComponents/Footer';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Afro AI',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}bg-black`}>{children}</body>
    </html>
  );
}
