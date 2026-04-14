"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FlashSale() {
  const time = [
    { label: "Ngày", val: "02" },
    { label: "Giờ", val: "14" },
    { label: "Phút", val: "55" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl bg-[#F9F9F9] overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="max-lg:w-full md:flex-[1.2] p-10 md:p-16 lg:p-20 z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-red-500"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                  Ưu đãi độc quyền
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tighter">
                Thiết kế phẳng. <br />
                <span className="text-red-500">Giá trị thật.</span>
              </h2>

              <p className="text-lg text-gray-500 lg:max-w-md leading-relaxed">
                Dòng sản phẩm Signature với chất liệu cao cấp, nay có mức giá ưu
                đãi đặc biệt dành cho những người tiên phong.
              </p>

              <div className="flex gap-8 py-4">
                {time.map((item, i) => (
                  <div key={i} className="text-left">
                    <p className="text-3xl font-bold text-gray-900 tracking-tighter">
                      {item.val}
                    </p>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div >
                <Button
                  size="lg"
                  className="px-10 h-14 bg-gray-900 text-white rounded-lg w-full sm:w-auto text-base font-medium transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-900 hover:to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transform"
                >
                  Mua ngay với giá ưu đãi
                </Button>
              </div>
            </div>
          </div>

          {/* Cột Hình ảnh - Ảnh PNG nổi bật trên nền phẳng */}
          <div className="flex-1 relative w-full h-[400px] lg:h-[600px] flex items-center justify-center p-12 max-lg:pt-0">
            {/* Vòng tròn trang trí phẳng, mờ nhẹ phía sau */}
            <div className="absolute w-[80%] aspect-square border border-gray-200 rounded-full"></div>

            {/* Ảnh PNG Sản phẩm */}
            <div className="relative z-10 w-full h-full group">
              <Image
                src="/images/home/flashsale1.png"
                alt="Product PNG"
                width={764}
                height={955}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              />
            </div>

            {/* Tag giá phẳng */}
            <div className="absolute top-16 right-16 z-11 bg-white border border-gray-100 px-5 py-3 rounded-2xl shadow-sm rotate-12">
              <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">
                Giá đặc biệt
              </p>
              <p className="text-2xl font-bold text-gray-900">1.250.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
