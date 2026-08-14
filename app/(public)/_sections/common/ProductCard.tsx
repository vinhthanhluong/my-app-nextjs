import { ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductItem {
  id: number,
  name: string,
  price: string,
  image: string,
  tag: string,
}

function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="group relative bg-gray-50 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-transparent hover:border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white border-none shadow-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            {product.tag}
          </Badge>
        </div>

        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" fill="currentColor" fillOpacity={0} />
        </button>

        {/* Quick Add Button */}
        <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Button className="w-full bg-gray-900 text-white rounded-xl py-6 shadow-xl hover:bg-red-500 transition-colors">
            <ShoppingBag className="w-4 h-4 mr-2" /> Thêm nhanh
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 px-2 pb-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-4">Màu sắc đặc trưng • 2026</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-gray-900 tracking-tight">{product.price}</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard