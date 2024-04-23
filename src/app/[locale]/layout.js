import FooterBody from "./components/Footer";
import HeaderBody from "./components/Header";
import "./globals.css";
import localFont from "next/font/local";

const avenir = localFont({
  src: "../../../public/fonts/Avenir-normal.otf",
  variable: "--font-avenir",
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
