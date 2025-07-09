import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '../public/CSS/style.CSS'
import Layout from './Components/Layout';
import Home from './Components/Home';
import Admin from './Admin';
import Users from './Users';
import CountriesListing from './CountriesListing';
import SliderListing from './SliderListing';
import TestimonialsListing from './TestimonialsListing';
import WhyChooseUsListing from './WhyChooseUsListing';
import Coupons from './Coupons';
import CategoriesListing from './CategoriesListing';
import MaterialsListing from './MaterialsListing';
import ColorsListing from './ColorsListing';
import ProductsListing from './ProductsListing';
import ContactEnquiryManagement from './ContactEnquiryManagement';
import NewsLetterManagement from './NewsLetterManagement';
import PaymentGatewayListing from './PaymentGatewayListing';
import Configurations from './Configurations';
import FaqsListing from './FaqsListing';
import CMSPagesListing from './CMSPagesListing';
import UserProfile from './UserProfile';


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admins' element={<Admin/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/countries' element={<CountriesListing/>}></Route>
          <Route path='/slider-listing' element={<SliderListing/>}></Route>
          <Route path='/testimonials-listing' element={<TestimonialsListing/>}></Route>
          <Route path='/whychooseus-listing' element={<WhyChooseUsListing/>}></Route>
          <Route path='/coupons' element={<Coupons/>}></Route>
          <Route path='/categories-listing' element={<CategoriesListing/>}></Route>
          <Route path='/materials-listing' element={<MaterialsListing/>}></Route>
          <Route path='/colors-listing' element={<ColorsListing/>}></Route>
          <Route path='/products-listing' element={<ProductsListing/>}></Route>
          <Route path='/contact-enquiry-management' element={<ContactEnquiryManagement/>}></Route>
          <Route path='/newsletter-management' element={<NewsLetterManagement/>}></Route>
          <Route path='/payment-gateway-listing' element={<PaymentGatewayListing/>}></Route>
          <Route path='/configurations' element={<Configurations/>}></Route>
          <Route path='/faqs-listing' element={<FaqsListing/>}></Route>
          <Route path='/cms-pages-listing' element={<CMSPagesListing/>}></Route>
          <Route path='/user-profile' element={<UserProfile/>}></Route>
        </Route>
      </Routes>    
    </BrowserRouter>
)
