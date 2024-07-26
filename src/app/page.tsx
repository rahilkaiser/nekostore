import Image from "next/image";
import {HeroSlider} from "@/components/HeroSlider";
import {ProductList} from "@/components/ProductList";
import {CategoryList} from "@/components/CategoryList";

export default function Home() {
  return (
      <div >
        <section>
          <HeroSlider/>
        </section>
          <section className="container mx-auto">
              <h2 className="p-14">Featured Products</h2>
              <ProductList/>
          </section>
          <section className="container mx-auto">
              <h2 className="p-14">Categories</h2>
              <CategoryList/>
          </section>
          <section className="container mx-auto">
              <h2 className="p-14">New Products</h2>
              <ProductList/>
          </section>
      </div>
  );
}
