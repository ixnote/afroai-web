import Navbar from '@/components/sharedComponents/Navbar';
import Footer from '@/components/sharedComponents/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-screen bg-inherit'>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
