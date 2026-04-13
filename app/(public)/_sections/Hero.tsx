import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {
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
          <div className="flex-1 relative w-full max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent"></div>
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
                width={1000}
                height={1000}
                alt="Product Hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thẻ trôi nổi (Floating Card) */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-pink-600 font-bold">SALE</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Giảm giá 20%</p>
                  <p className="text-xs text-gray-500">Cho đơn hàng đầu tiên</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
