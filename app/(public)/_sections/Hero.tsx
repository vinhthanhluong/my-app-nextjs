"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {

  const heroImages = [
    "/images/home/hero1.jpg",
    "/images/home/hero2.jpg",
    "/images/home/hero3.jpg",
    "/images/home/hero4.jpg",
  ];

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Cột Nội Dung */}
          <div className="flex-1 text-center lg:text-left z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-500 uppercase bg-red-50 rounded-full">
              Sưu tập mới 2026
            </span>
            <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Nâng tầm phong cách <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-red-500 to-pink-500">
                Tối giản & Tinh tế
              </span>
            </h1>
            <p className="md:text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Khám phá những thiết kế độc bản, loại bỏ mọi chi tiết thừa thãi để tập trung vào giá trị cốt lõi của sản phẩm.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                className="px-8 py-6 bg-gray-900 text-white rounded-lg w-full sm:w-auto text-base font-medium transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-900 hover:to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transform"
              >
                Mua ngay
              </Button>

              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-gray-400 text-gray-700 rounded-lg w-full sm:w-auto text-base font-medium transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:bg-pink-50 hover:scale-105 transform"
              >
                Xem bộ sưu tập
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Khách hàng</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-500">Đánh giá</p>
              </div>
            </div>
          </div>

          {/* Cột Hình Ảnh */}
          <div className="flex-1 relative w-full max-w-[450px] lg:max-w-[520px] xl:max-w-2xl group">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/5] lg:aspect-square shadow-2xl">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper w-full h-full"
              >
                {heroImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                      <Image
                        src={src}
                        width={1000}
                        height={1000}
                        alt={`Hero Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        priority={index === 0} // Ưu tiên load ảnh đầu tiên
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Tùy chỉnh màu sắc dấu chấm Pagination bằng CSS thủ công hoặc Tailwind Global */}
              <style jsx global>{`
                .swiper-pagination-bullet-active {
                  background: #ec4899 !important; /* Màu hồng pink-500 */
                  width: 20px !important;
                  border-radius: 5px !important;
                }
                .swiper-pagination-bullet {
                  background: rgba(255, 255, 255, 0.8);
                }
              `}</style>
            </div>

            {/* Thẻ trôi nổi (Floating Card) */}
            {/* <div className="absolute max-lg:-top-3 max-lg:-left-3 lg:-bottom-6 lg:-left-6 z-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 ">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-pink-600 font-bold">SALE</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Giảm giá 20%</p>
                  <p className="text-xs text-gray-500">Cho đơn hàng đầu tiên</p>
                </div>
              </div>
            </div> */}
            <div className="absolute z-2 max-lg:-top-4 max-lg:-left-4 lg:-bottom-6 lg:-left-6 z-20 bg-white p-3.5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(236,72,153,0.15)] border border-pink-100 rounded-xl">
              <div className="flex items-center gap-3">

                {/* Icon SALE với màu sắc Pastel dịu nhẹ, nhỏ gọn hơn */}
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center border border-pink-200 shadow-md shadow-pink-100/50  transition-colors">
                  <span className="text-pink-700 font-extrabold tracking-tight leading-none text-center">
                    SALE<br /><span className="text-xs font-semibold">20%</span>
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-950 transition-colors">Ưu đãi độc quyền</p>
                  {/* Tag "Đơn hàng đầu tiên" gọn gàng hơn */}
                  <span className="text-[11px] font-medium text-pink-600 bg-pink-50/70 px-2 py-0.5 rounded-full inline-block mt-0.5 border border-pink-100/50">
                    Cho đơn hàng đầu tiên
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
