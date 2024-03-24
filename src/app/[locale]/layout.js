import FooterBody from "./components/Footer";
import HeaderBody from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const avenir = localFont({
  src: "../../../public/fonts/Avenir-normal.otf",
  variable: "--font-avenir",
});
const futura = localFont({
  src: "../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});
export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={avenir.className}>
        <HeaderBody />
        {children}
        <FooterBody />
      </body>
    </html>
  );
}
