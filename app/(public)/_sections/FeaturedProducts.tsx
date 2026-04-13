import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Minimalist Watch v1",
      price: "1.200.000đ",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
      tag: "Bán chạy"
    },
    {
      id: 2,
      name: "Essential Tote Bag",
      price: "450.000đ",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=500&auto=format&fit=crop",
      tag: "Mới về"
    },
    {
      id: 3,
      name: "Signature Wallet",
      price: "350.000đ",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500&auto=format&fit=crop",
      tag: "-10%"
    }
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">

        {/* Phần Lợi ích (Benefits) - Giúp khách hàng tin tưởng ngay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <Truck className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Giao hàng nhanh</h3>
              <p className="text-sm text-gray-500">Miễn phí cho đơn từ 500k</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Bảo hành 12 tháng</h3>
              <p className="text-sm text-gray-500">Cam kết chất lượng chuẩn "Tiny"</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <Star className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Đổi trả 7 ngày</h3>
              <p className="text-sm text-gray-500">Thủ tục đơn giản, nhanh chóng</p>
            </div>
          </div>
        </div>

        {/* Phần Sản phẩm tiêu biểu */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-3 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600">Những thiết kế được yêu thích nhất trong bộ sưu tập "Tiny Red" tháng này.</p>
          </div>
          <Button variant="ghost" className="text-red-500 hover:text-red-600 p-0 hover:bg-transparent font-semibold">
            Xem tất cả sản phẩm <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Grid Sản phẩm */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 sm:gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg sm:rounded-2xl mb-3 sm:mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-[10px] font-bold uppercase tracking-widest text-gray-900 rounded-full shadow-sm">
                  {product.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-gray-900 text-white shadow-xl py-3 rounded-md font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 hover:shadow-[0_10px_20px_-5px_rgba(236,72,153,0.5)] active:scale-95">
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-gray-500 font-medium">{product.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};