import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Testimonials from "./Testimonials";

export default function Home() {
  
 const product = useLoaderData()
 console.log(product);
 
  return (
    <div>
          <Hero/>
        <NewProducts product={product}/>
        <Testimonials/>
    </div>
  )
}