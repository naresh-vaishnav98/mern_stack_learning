import "../../public/css/style.css";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import { Geist } from 'next/font/google'


const geist = Geist({
  subsets: ['Rubic'],
})





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
