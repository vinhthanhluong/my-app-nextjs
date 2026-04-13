import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[500px] lg:h-[600px]">

          {/* Cột trái - Banner lớn */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
              alt="Lifestyle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 md:p-8 lg:p-12">
              <span className="text-red-400 font-bold tracking-widest text-sm mb-2">#TINY_LIFESTYLE</span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Phong cách sống <br /> Tối giản hiện đại
              </h2>
              <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 px-5 py-4 sm:px-8 sm:py-6 sm:rounded-lg font-bold">
                Khám phá ngay
              </Button>
            </div>
          </div>

          {/* Cột phải - 2 banner nhỏ chồng lên nhau */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">

            {/* Banner nhỏ 1 */}
            <div className="relative group overflow-hidden rounded-3xl bg-pink-50">
              <div className="h-full flex items-center justify-between p-8 sm:py-18 md:p-4 lg:px-8 z-10">
                <div className="max-w-[45%]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phụ kiện Đỏ</h3>
                  <p className="text-sm text-gray-600 mb-4 italic">Điểm nhấn rực rỡ cho ngày mới.</p>
                  <Button variant="link" className="p-0 text-red-500 h-auto font-bold">
                    Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop"
                alt="Accessories"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Banner nhỏ 2 */}
            <div className="relative group overflow-hidden rounded-3xl bg-gray-900 text-white">
              <div className="h-full flex flex-col justify-center p-8 md:p-4 lg:p-8 z-10">
                <h3 className="text-xl font-bold mb-2">Đồ công nghệ</h3>
                <p className="text-sm text-gray-400 mb-4">Tinh gọn góc làm việc của bạn.</p>
                <Button variant="outline" className="w-fit text-black px-4 border-white/20 hover:bg-white hover:text-gray-900 transition-all">
                  Mua bộ sưu tập
                </Button>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-red-500/20 blur-3xl rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;