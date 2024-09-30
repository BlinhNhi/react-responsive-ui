import AOS from "aos";
import "aos/dist/aos.css"

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";
import React from "react";
import TopProduct from "./components/TopProduct/TopProduct";
import Banner from "./components/Banner/Banner";
import SubsCribe from "./components/Subscribe/Subscribe";
import Comment from "./components/Comment/Comment";
import Footer from "./components/Footer/Footer";


function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white duration-200">
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <TopProduct></TopProduct>
      <Banner></Banner>
      <SubsCribe></SubsCribe>
      <Comment></Comment>
      <Footer></Footer>
    </div>
  );
}

export default App;