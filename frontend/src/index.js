import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home_Page from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './landing_page/signup/Signup'
import Pricing_page from './landing_page/pricing/PricingPage';
import About_Page from './landing_page/about/AboutPage'
import Products from './landing_page/product/ProductPage'
import Support from './landing_page/support/HeroPage'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import  Login  from './landing_page/Login';
import authHome from './landing_page/Home';
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About_Page />} />
        <Route path="/product" element={<Products />} />
        <Route path="/pricing" element={<Pricing_page />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<authHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);



