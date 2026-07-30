import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function BlogNews() {
  const posts = [
    {
      id: 1,
      category: "Thiết kế",
      title: "Tại sao phong cách tối giản lại lên ngôi trong năm 2026?",
      date: "12 Tháng 4, 2026",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Lối sống",
      title: "5 cách để tinh gọn không gian làm việc của bạn",
      date: "08 Tháng 4, 2026",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Cửa hàng",
      title: "Hành trình tạo ra bộ sưu tập Tiny Red đặc trưng",
      date: "01 Tháng 4, 2026",
      image: "https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?q=80&w=688&auto=format&fit=crop",
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">

        {/* Header của Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-red-500"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Tin tức & Bài viết</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Chia sẻ từ <span className="italic font-serif">tiny.</span> blog
            </h2>
          </div>
          <Button variant="outline" className="border-gray-200 hover:bg-gray-50 rounded-full px-8">
            Xem tất cả bài viết
          </Button>
        </div>

        {/* Grid danh sách bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Hình ảnh bài viết */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Nội dung bài viết */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <div className="pt-2">
                  <Button variant="link" className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all">
                    Đọc tiếp <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};