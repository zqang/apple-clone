import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Clone",
  description: "Apple clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + `block min-w-[320px] m-0 p-0`}>
        <Navbar />
        <div className="pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
