import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import '../../public/CSS/tailwind-ecommerce.css'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
