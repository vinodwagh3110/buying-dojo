import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import {products} from "../data/products";

const Home=()=> {
  return (
  <>
  <Hero/>
  <ProductList products={products} />;
  </>
  )
}

export default Home 