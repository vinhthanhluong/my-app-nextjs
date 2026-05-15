"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShoppingBag,
  ArrowLeft,
  ArrowUpRight,
  Star,
  Truck,
  RotateCcw,
  Shield,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const PRODUCT = {
  name: "Túi Tote Tiny Red",
  tag: "Mới về",
  price: "680.000₫",
  originalPrice: "850.000₫",
  rating: 4.8,
  reviewCount: 124,
  category: "Túi xách",
  sku: "TT-RED-2026",
  description:
    "Túi Tote Tiny Red được thiết kế theo triết học ít hơn là nhiều hơn — mỗi đường nét, mỗi đường may đều có mục đích. Chất liệu da bò thật được thuộc theo phương pháp truyền thống, đảm bảo độ bền lâu dài và vẻ đẹp ngày càng sâu theo thời gian.",
  details: [
    "Chất liệu: Da bò thật 100%",
    "Kích thước: 38 × 14 × 32 cm",
    "Trọng lượng: 520g",
    "Lớp lót: Vải canvas chống thấm",
    "Khoá: YKK Nhật Bản",
    "Ngàm: Hợp kim mạ vàng 18K",
  ],
  colors: [
    { name: "Đỏ Tiny", hex: "#EF4444" },
    { name: "Đen Clásico", hex: "#1F2937" },
    { name: "Xám Nhạt", hex: "#D1D5DB" },
  ],
  images: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
  ],
};

const RELATED = [
  {
    id: 2,
    name: "Ví Da Mini Classic",
    tag: "Bán chạy",
    price: "420.000₫",
    priceNum: 420000,
    category: "Ví",
    colors: ["#1F2937", "#D1D5DB"],
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Balo Everyday Compact",
    tag: "Giới hạn",
    price: "920.000₫",
    priceNum: 920000,
    category: "Balo",
    colors: ["#EF4444", "#D1D5DB"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Túi Shoulder Crossbody",
    tag: "Bán chạy",
    price: "750.000₫",
    priceNum: 750000,
    category: "Túi xách",
    colors: ["#EF4444", "#1F2937", "#D1D5DB"],
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    isFavorite: false,
  },
];

// ─── Related Card ──────────────────────────────────────────────────────────────
function RelatedCard({ product }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="group relative bg-gray-50 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100">
      <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-white">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white border-none shadow-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            {product.tag}
          </Badge>
        </div>
        <button onClick={() => setFav(v => !v)} className={`absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm transition-colors ${fav ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}>
          <Heart className="w-4 h-4" fill={fav ? "currentColor" : "none"} strokeWidth={fav ? 0 : 2} />
        </button>
        <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Button className="w-full bg-gray-900 text-white rounded-xl py-6 shadow-xl hover:bg-red-500 transition-colors">
            <ShoppingBag className="w-4 h-4 mr-2" /> Thêm nhanh
          </Button>
        </div>
      </div>
      <div className="mt-6 px-2 pb-2">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.category} • 2026</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-gray-900 tracking-tight">{product.price}</span>
          <div className="flex gap-1">
            {product.colors.map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Accordion ─────────────────────────────────────────────────────────────────
function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">{label}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [fav, setFav] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 pt-8">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <button className="hover:text-gray-900 transition-colors flex items-center gap-1.5 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Sản phẩm
          </button>
          <span>/</span>
          <span className="text-gray-600 font-medium">{PRODUCT.name}</span>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* ── Gallery ─────────────────────────────────────────── */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 sm:w-20 flex-shrink-0">
              {PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-shrink-0 w-16 sm:w-20 aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${activeImage === i
                    ? "ring-2 ring-gray-900 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square rounded-[2rem] overflow-hidden bg-gray-50">
              <Image
                src={PRODUCT.images[activeImage]}
                alt={PRODUCT.name}
                fill
                className="object-cover transition-all duration-500"
              />

              {/* Tag */}
              <div className="absolute top-5 left-5">
                <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white border-none shadow-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {PRODUCT.tag}
                </Badge>
              </div>

              {/* Wishlist */}
              <button
                onClick={() => setFav((v) => !v)}
                className={`absolute top-5 right-5 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm transition-colors ${fav ? "text-red-500" : "text-gray-400 hover:text-red-500"
                  }`}
              >
                <Heart className="w-5 h-5" fill={fav ? "currentColor" : "none"} strokeWidth={fav ? 0 : 2} />
              </button>
            </div>
          </div>

          {/* ── Product Info ───────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Category + Rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-red-500" />
                <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">
                  {PRODUCT.category}
                </span>
              </span>
              <span className="text-gray-200">·</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-gray-900">{PRODUCT.rating}</span>
                <span className="text-xs text-gray-400">({PRODUCT.reviewCount} đánh giá)</span>
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {PRODUCT.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-gray-900 tracking-tight">{PRODUCT.price}</span>
              <span className="text-lg text-gray-400 line-through font-medium">{PRODUCT.originalPrice}</span>
              <Badge className="bg-red-50 text-red-500 hover:bg-red-50 border-none text-xs font-bold px-2 py-0.5">
                -20%
              </Badge>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-[15px] mb-8">{PRODUCT.description}</p>

            {/* Color Picker */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Màu sắc</span>
                <span className="text-sm font-semibold text-gray-700">{PRODUCT.colors[activeColor].name}</span>
              </div>
              <div className="flex gap-3">
                {PRODUCT.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveColor(i)}
                    title={color.name}
                    className={`w-9 h-9 rounded-full transition-all duration-200 ${activeColor === i ? "ring-2 ring-offset-2 ring-gray-900 scale-110" : "hover:scale-110"
                      }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-6" />

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-4">
              {/* Qty */}
              <div className="flex items-center gap-0 border border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQty((v) => Math.max(1, v - 1))}
                  className="w-11 h-11 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-bold text-gray-900">{qty}</span>
                <button
                  onClick={() => setQty((v) => v + 1)}
                  className="w-11 h-11 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to cart */}
              <Button
                onClick={handleAddToCart}
                className={`flex-1 rounded-full py-6 text-sm font-bold shadow-lg transition-all duration-300 ${addedToCart
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : "bg-gray-900 hover:bg-red-500 text-white"
                  }`}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {addedToCart ? "Đã thêm vào giỏ!" : "Thêm vào giỏ hàng"}
              </Button>

              {/* Wishlist large */}
              <button
                onClick={() => setFav((v) => !v)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${fav
                  ? "bg-red-50 border-red-200 text-red-500"
                  : "border-gray-200 text-gray-400 hover:border-red-200 hover:text-red-500"
                  }`}
              >
                <Heart className="w-5 h-5" fill={fav ? "currentColor" : "none"} strokeWidth={fav ? 0 : 2} />
              </button>
            </div>

            {/* Buy now */}
            <Button variant="outline" className="w-full rounded-full py-6 border-gray-200 hover:bg-gray-50 text-sm font-bold mb-8">
              Mua ngay
            </Button>

            {/* Perks */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: "Miễn phí vận chuyển", sub: "Đơn từ 500K" },
                { icon: RotateCcw, label: "Đổi trả 30 ngày", sub: "Không điều kiện" },
                { icon: Shield, label: "Bảo hành 12 tháng", sub: "Lỗi nhà sản xuất" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center p-3 rounded-2xl bg-gray-50">
                  <div className="w-9 h-9 mx-auto mb-2 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-[11px] font-bold text-gray-700 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>

            {/* SKU */}
            <p className="text-xs text-gray-300 mt-6">SKU: {PRODUCT.sku}</p>
          </div>
        </div>
      </div>

      {/* ── Details Accordion ─────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-12">
          <div className="max-w-2xl">
            <Accordion label="Chi tiết sản phẩm">
              <ul className="space-y-2">
                {PRODUCT.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>

            <Accordion label="Hướng dẫn bảo quản">
              <p className="text-sm text-gray-500 leading-relaxed">
                Lau sạch bằng khăn mềm ẩm sau mỗi lần sử dụng. Tránh tiếp xúc trực tiếp với nước mưa và ánh nắng kéo dài. Bảo quản trong túi flannel đi kèm khi không sử dụng. Thoa kem dưỡng da 3-4 tháng/lần để duy trì độ bóng và độ mềm mại.
              </p>
            </Accordion>

            <Accordion label="Vận chuyển & đổi trả">
              <div className="space-y-3 text-sm text-gray-500 leading-relaxed">
                <p>Miễn phí vận chuyển cho đơn hàng từ 500.000₫. Giao hàng nội thành 1-2 ngày, toàn quốc 3-5 ngày làm việc.</p>
                <p>Đổi trả trong vòng 30 ngày kể từ ngày nhận hàng. Sản phẩm phải còn nguyên tem, chưa qua sử dụng.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Có thể bạn thích
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Sản phẩm liên quan
              </h2>
            </div>
            <Button variant="outline" className="border-gray-200 hover:bg-gray-50 rounded-full px-8">
              Xem tất cả <ArrowUpRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}