"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingBag, ArrowRight, Heart } from "lucide-react";

const products = {
  trending: [
    { id: 1, name: "Tiny Card Platinum", price: "299.000đ", image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=500", tag: "Hot" },
    { id: 2, name: "Leather Wallet Case", price: "550.000đ", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500", tag: "New" },
    { id: 3, name: "Minimalist Key Tag", price: "150.000đ", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500", tag: "Best" },
    { id: 4, name: "Signature Pen", price: "450.000đ", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=500", tag: "New" },
    { id: 5, name: "Signature Pen", price: "450.000đ", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=500", tag: "New" },
    { id: 6, name: "Signature Pen", price: "450.000đ", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=500", tag: "New" },
    { id: 7, name: "Signature Pen", price: "450.000đ", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=500", tag: "New" },
  ],
  new: [
    { id: 5, name: "Tiny Card Red Edition", price: "320.000đ", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500", tag: "New" },
    { id: 6, name: "Carbon Card Holder", price: "890.000đ", image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=500", tag: "-20%" },
  ]
};

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">

        <Tabs defaultValue="trending" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Sản phẩm tiêu biểu</h2>
              <p className="text-gray-500 italic">Được tinh tuyển cho phong cách của bạn.</p>
            </div>

            <TabsList className="bg-gray-50 p-1 rounded-full border border-gray-100">
              <TabsTrigger value="trending" className="rounded-full px-8 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">Xu hướng</TabsTrigger>
              <TabsTrigger value="new" className="rounded-full px-8 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">Mới về</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="trending" className="mt-0 outline-none">
            <ProductSlider data={products.trending} />
          </TabsContent>
          <TabsContent value="new" className="mt-0 outline-none">
            <ProductSlider data={products.new} />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-full border-gray-200 px-10 py-6 hover:bg-gray-900 hover:text-white transition-all duration-500">
            Khám phá toàn bộ cửa hàng <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductSlider({ data }: { data: any[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-4">
        {data.map((product) => (
          <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="group relative bg-gray-50 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-transparent hover:border-gray-100">
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
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Nút điều hướng tinh chỉnh lại vị trí */}
      <div className="hidden lg:block">
        <CarouselPrevious className="-left-6 h-12 w-12 border-gray-100 shadow-sm" />
        <CarouselNext className="-right-6 h-12 w-12 border-gray-100 shadow-sm" />
      </div>
    </Carousel>
  );
}