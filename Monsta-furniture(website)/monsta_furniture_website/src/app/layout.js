import "../../public/css/style.css";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
// import { Geist } from 'next/font/google'
import "@fontsource/playfair-display"; // Defaults to 400 weight
import "@fontsource/playfair-display/700.css"; // Specific weight
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
  variable: "--font-playfair",
});



// const geist = Geist({
//   subsets: ['Rubic'],
// })





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
