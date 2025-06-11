import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavbarTop from "./components/navbar/navbar-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "BDG CLUB DE PADEL",
  description: "Bandung Club De Padel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <NavbarTop />
        <div>{children}</div>
      </body>
    </html>
  );
}
