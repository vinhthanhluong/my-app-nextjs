import Hero from './_sections/home/Hero';
import FeaturedProducts from './_sections/home/FeaturedProducts';
import Categories from './_sections/home/Categories';
import FlashSale from './_sections/home/FlashSale';
import Testimonials from './_sections/home/Testimonials';
import InstagramFeed from './_sections/home/InstagramFeed';
import AboutBrand from './_sections/home/AboutBrand';
import BlogNews from './_sections/home/BlogNews';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <FlashSale />
      <Testimonials />
      <InstagramFeed />
      <AboutBrand />
      <BlogNews />
    </>
  )
}