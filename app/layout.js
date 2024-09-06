import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Veteriland",
  description: "Sistema de citas para mascotas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main>{children}</main>
      </body>
    </html>
  );
}
