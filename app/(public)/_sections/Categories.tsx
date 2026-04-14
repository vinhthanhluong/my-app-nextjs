import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[500px] lg:h-[600px]">
          {/* Cột trái - Banner lớn */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-3xl bg-gray-100">
            <img
              src="/images/home/categories1.jpg"
              alt="Lifestyle"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 md:p-8 lg:p-12">
              <span className="text-red-400 font-bold tracking-widest text-sm mb-2">
                #TINY_LIFESTYLE
              </span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Phong cách sống <br /> Tối giản hiện đại
              </h2>
              <Button className="w-fit bg-white text-gray-900 px-5 py-4 sm:px-8 sm:py-6 sm:rounded-lg font-bold transition-all duration-300
                hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white hover:border-transparent hover:scale-105 shadow-sm">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Phụ kiện Đỏ
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 italic">
                    Điểm nhấn rực rỡ cho ngày mới.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-red-500 h-auto font-bold"
                  >
                    Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Image
                src="/images/home/categories2.jpg"
                width={500}
                height={667}
                alt="Accessories"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Banner nhỏ 2 */}
            <div className="relative group overflow-hidden rounded-3xl bg-[#08080a] text-white h-full border border-white/5">
              <div className="absolute inset-0 z-0">
                <div className="absolute -right-[10%] -top-[10%] w-[80%] h-[80%] bg-red-600/20 blur-[100px] rounded-full group-hover:bg-red-500/30 transition-colors duration-700"></div>
                <div className="absolute left-[-5%] bottom-[-5%] w-[50%] h-[50%] bg-pink-600/10 blur-[80px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
              </div>

              <div className="relative h-full flex flex-col justify-center p-8 md:p-6 lg:p-10 z-20">
                <div className="flex items-center gap-2 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="h-[1px] w-6 bg-red-500"></div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-400">
                    Future Tech
                  </span>
                </div>

                <h3 className="text-xl lg:text-3xl font-black mb-3 tracking-tighter leading-none">
                  Đồ Công Nghệ
                </h3>

                <p className="text-sm text-gray-400 mb-8 max-w-[220px] leading-relaxed font-light">
                  Nâng tầm không gian làm việc với những thiết bị tinh gọn nhất.
                </p>

                <Button
                  variant="outline"
                  className="w-fit bg-white/5 border-white/10 text-white backdrop-blur-md transition-all duration-300 rounded-xl px-6 py-6
             hover:bg-pink-500 hover:text-white hover:shadow-[0_0_30px_10px_rgba(236,72,153,0.4)]
             hover:scale-105 active:scale-95"
                >
                  Mua bộ sưu tập
                </Button>
              </div>

              <div className="absolute right-[-20px] top-[10%] w-40 h-40 z-10 opacity-50 group-hover:opacity-100 group-hover:-translate-x-5 group-hover:-translate-y-2 transition-all duration-700 ease-out">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Vòng tròn 3D giả lập bằng gradient */}
                  <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-full rotate-45 scale-75 group-hover:rotate-90 transition-transform duration-1000"></div>
                  <div className="absolute inset-4 border-[0.5px] border-white/10 rounded-full -rotate-12 scale-90 group-hover:rotate-12 transition-transform duration-1000"></div>
                  {/* Điểm sáng trung tâm */}
                  <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_20px_#ef4444]"></div>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-red-500/30 transition-colors duration-500"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

