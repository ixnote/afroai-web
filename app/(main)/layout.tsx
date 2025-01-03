import Navbar from "@/components/sharedComponents/Navbar";
import Footer from "@/components/sharedComponents/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-black h-screen">
      <Navbar />
      <div className="bg-black">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
