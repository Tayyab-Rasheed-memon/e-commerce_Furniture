import Bag from "@/components/Bag";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Product from "@/components/Product";
import Images from "@/components/Images";
import QuestionsLooksHere from "@/components/ContactForm";

import PopularProducts from "@/components/PopularProducts";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
      <div>
          <Hero/>
          {/* <ProductList/> */}
          <Newsletter/>
          <Product/>
        
          <FeaturedProducts/>
          <Bag/>
            <Images/>

            <QuestionsLooksHere/>

           <AboutUs/>
            <PopularProducts/>

      </div>
  );
}
