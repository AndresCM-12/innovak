import FooterBody from "./components/Footer";
import HeaderBody from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <HeaderBody />
        {children}
        <FooterBody />
      </body>
    </html>
  );
}
