// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Heart,
//   ShoppingBag,
//   SlidersHorizontal,
//   ChevronDown,
//   X,
//   ArrowUpRight,
//   Search,
// } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────
// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Túi Tote Tiny Red",
//     tag: "Mới về",
//     price: "680.000₫",
//     priceNum: 680000,
//     category: "Túi xách",
//     colors: ["#EF4444", "#1F2937"],
//     image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 2,
//     name: "Ví Da Mini Classic",
//     tag: "Bán chạy",
//     price: "420.000₫",
//     priceNum: 420000,
//     category: "Ví",
//     colors: ["#1F2937", "#D1D5DB"],
//     image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 3,
//     name: "Balo Everyday Compact",
//     tag: "Giới hạn",
//     price: "920.000₫",
//     priceNum: 920000,
//     category: "Balo",
//     colors: ["#EF4444", "#D1D5DB"],
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 4,
//     name: "Túi Clutch Evening",
//     tag: "Mới về",
//     price: "560.000₫",
//     priceNum: 560000,
//     category: "Túi xách",
//     colors: ["#1F2937", "#EF4444"],
//     image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 5,
//     name: "Hộp Đựng Trang Sức Tiny",
//     tag: "Độc quyền",
//     price: "340.000₫",
//     priceNum: 340000,
//     category: "Phụ kiện",
//     colors: ["#D1D5DB", "#EF4444"],
//     image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 6,
//     name: "Túi Shoulder Crossbody",
//     tag: "Bán chạy",
//     price: "750.000₫",
//     priceNum: 750000,
//     category: "Túi xách",
//     colors: ["#EF4444", "#1F2937", "#D1D5DB"],
//     image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 7,
//     name: "Ví Dài Zip-Around",
//     tag: "Mới về",
//     price: "490.000₫",
//     priceNum: 490000,
//     category: "Ví",
//     colors: ["#1F2937", "#EF4444"],
//     image: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
//   {
//     id: 8,
//     name: "Balo Mini Daypack",
//     tag: "Giới hạn",
//     price: "830.000₫",
//     priceNum: 830000,
//     category: "Balo",
//     colors: ["#EF4444", "#D1D5DB"],
//     image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=800&auto=format&fit=crop",
//     isFavorite: false,
//   },
// ];

// const CATEGORIES = ["Tất cả", "Túi xách", "Ví", "Balo", "Phụ kiện"];
// const SORT_OPTIONS = [
//   { label: "Nổi bật", value: "featured" },
//   { label: "Mới nhất", value: "newest" },
//   { label: "Giá thấp → cao", value: "price_asc" },
//   { label: "Giá cao → thấp", value: "price_desc" },
// ];

// // ─── Product Card (matches design system) ─────────────────────────────────────
// function ProductCard({ product }) {
//   const [fav, setFav] = useState(product.isFavorite);

//   return (
//     <div className="group relative bg-gray-50 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100">
//       {/* Image Container */}
//       <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-white">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover transition-transform duration-700 group-hover:scale-110"
//         />

//         {/* Floating Tag */}
//         <div className="absolute top-4 left-4">
//           <Badge className="bg-white/90 backdrop-blur-md text-gray-900 hover:bg-white border-none shadow-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
//             {product.tag}
//           </Badge>
//         </div>

//         {/* Wishlist */}
//         <button
//           onClick={() => setFav((v) => !v)}
//           className={`absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm transition-colors ${fav ? "text-red-500" : "text-gray-400 hover:text-red-500"
//             }`}
//         >
//           <Heart
//             className="w-4 h-4"
//             fill={fav ? "currentColor" : "none"}
//             strokeWidth={fav ? 0 : 2}
//           />
//         </button>

//         {/* Quick Add */}
//         <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//           <Button className="w-full bg-gray-900 text-white rounded-xl py-6 shadow-xl hover:bg-red-500 transition-colors">
//             <ShoppingBag className="w-4 h-4 mr-2" /> Thêm nhanh
//           </Button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="mt-6 px-2 pb-2">
//         <div className="flex justify-between items-start mb-1">
//           <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
//         </div>
//         <p className="text-gray-500 text-sm mb-4">{product.category} • 2026</p>
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-black text-gray-900 tracking-tight">{product.price}</span>
//           <div className="flex gap-1">
//             {product.colors.map((c, i) => (
//               <div
//                 key={i}
//                 className="w-3 h-3 rounded-full border border-white shadow-sm"
//                 style={{ backgroundColor: c }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState("Tất cả");
//   const [sortBy, setSortBy] = useState("featured");
//   const [showSort, setShowSort] = useState(false);
//   const [showFilter, setShowFilter] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState([0, 1000000]);

//   const filtered = PRODUCTS.filter((p) => {
//     const matchCat = activeCategory === "Tất cả" || p.category === activeCategory;
//     const matchSearch =
//       searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchPrice = p.priceNum >= priceRange[0] && p.priceNum <= priceRange[1];
//     return matchCat && matchSearch && matchPrice;
//   }).sort((a, b) => {
//     if (sortBy === "price_asc") return a.priceNum - b.priceNum;
//     if (sortBy === "price_desc") return b.priceNum - a.priceNum;
//     return 0;
//   });

//   const activeSortLabel = SORT_OPTIONS.find((s) => s.value === sortBy)?.label;

//   return (
//     <div className="bg-white min-h-screen">
//       {/* ── Page Header ───────────────────────────────────────── */}
//       <header className="border-b border-gray-100">
//         <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="w-8 h-[1px] bg-red-500" />
//                 <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
//                   Bộ sưu tập 2026
//                 </span>
//               </div>
//               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
//                 Sản phẩm của{" "}
//                 <span className="italic font-serif">tiny.</span>
//               </h1>
//               <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
//                 Mỗi sản phẩm là một quyết định có chủ đích — được thiết kế để tồn tại lâu dài, không phải để lỗi thời.
//               </p>
//             </div>

//             {/* Search */}
//             <div className="relative w-full lg:w-72">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Tìm sản phẩm..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition-all bg-gray-50"
//               />
//             </div>
//           </div>

//           {/* Filter bar */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10">
//             {/* Categories */}
//             <div className="flex items-center gap-2 flex-wrap">
//               {CATEGORIES.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
//                       ? "bg-gray-900 text-white"
//                       : "border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
//                     }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Right controls */}
//             <div className="flex items-center gap-3">
//               <span className="text-sm text-gray-400">{filtered.length} sản phẩm</span>

//               {/* Sort dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowSort((v) => !v)}
//                   className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 transition-all"
//                 >
//                   {activeSortLabel}
//                   <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? "rotate-180" : ""}`} />
//                 </button>
//                 {showSort && (
//                   <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-20">
//                     {SORT_OPTIONS.map((opt) => (
//                       <button
//                         key={opt.value}
//                         onClick={() => { setSortBy(opt.value); setShowSort(false); }}
//                         className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${sortBy === opt.value
//                             ? "text-red-500 font-semibold"
//                             : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                           }`}
//                       >
//                         {opt.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Filter toggle */}
//               <button
//                 onClick={() => setShowFilter((v) => !v)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${showFilter
//                     ? "bg-gray-900 text-white border-gray-900"
//                     : "border-gray-200 text-gray-600 hover:border-gray-400"
//                   }`}
//               >
//                 <SlidersHorizontal className="w-4 h-4" />
//                 Lọc
//               </button>
//             </div>
//           </div>

//           {/* Expandable filter panel */}
//           {showFilter && (
//             <div className="mt-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-wrap gap-8 items-start">
//               <div>
//                 <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Khoảng giá</p>
//                 <div className="flex items-center gap-3">
//                   {[
//                     { label: "Tất cả", range: [0, 1000000] },
//                     { label: "Dưới 500K", range: [0, 500000] },
//                     { label: "500K – 800K", range: [500000, 800000] },
//                     { label: "Trên 800K", range: [800000, 1000000] },
//                   ].map((opt) => (
//                     <button
//                       key={opt.label}
//                       onClick={() => setPriceRange(opt.range)}
//                       className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
//                           ? "bg-gray-900 text-white"
//                           : "border border-gray-200 text-gray-600 hover:border-gray-400"
//                         }`}
//                     >
//                       {opt.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => {
//                   setActiveCategory("Tất cả");
//                   setSortBy("featured");
//                   setPriceRange([0, 1000000]);
//                   setSearchQuery("");
//                   setShowFilter(false);
//                 }}
//                 className="ml-auto flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"
//               >
//                 <X className="w-3.5 h-3.5" />
//                 Xoá bộ lọc
//               </button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* ── Product Grid ─────────────────────────────────────── */}
//       <main className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filtered.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-32 text-gray-400">
//             <p className="text-lg font-medium">Không tìm thấy sản phẩm.</p>
//             <p className="text-sm mt-2">Hãy thử điều chỉnh bộ lọc hoặc từ khoá tìm kiếm.</p>
//           </div>
//         )}

//         {/* Load more CTA */}
//         {filtered.length > 0 && (
//           <div className="flex justify-center mt-16">
//             <Button
//               variant="outline"
//               className="border-gray-200 hover:bg-gray-50 rounded-full px-10 py-6 text-sm font-semibold"
//             >
//               Xem thêm sản phẩm
//               <ArrowUpRight className="ml-2 w-4 h-4" />
//             </Button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }