import { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });
//const Epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Амелик - медицинский центр",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main className="">
      {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
