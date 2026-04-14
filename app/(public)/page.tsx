import Hero from './_sections/Hero';
import FeaturedProducts from './_sections/FeaturedProducts';
import Categories from './_sections/Categories';
import FlashSale from './_sections/FlashSale';
import Testimonials from './_sections/Testimonials';
import InstagramFeed from './_sections/InstagramFeed';
import AboutBrand from './_sections/AboutBrand';
import BlogNews from './_sections/BlogNews';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <FlashSale />
      <Testimonials />
      <InstagramFeed />
      <AboutBrand />
      <BlogNews />
    </div>
  )
}