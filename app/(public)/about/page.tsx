"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { number: "2019", label: "Năm thành lập" },
  { number: "12K+", label: "Khách hàng tin tưởng" },
  { number: "48", label: "Sản phẩm hiện hành" },
  { number: "100%", label: "Chất liệu tự nhiên" },
];

const VALUES = [
  {
    index: "01",
    title: "Ít hơn, nhưng tốt hơn",
    body: "Chúng tôi không sản xuất nhiều. Mỗi sản phẩm ra đời sau hàng tháng nghiên cứu, thử nghiệm và loại bỏ. Chỉ những gì thực sự cần thiết mới được giữ lại.",
  },
  {
    index: "02",
    title: "Vật liệu có nguồn gốc rõ ràng",
    body: "Từ da bò thuộc thủ công tại Hội An đến vải canvas hữu cơ từ Đà Lạt — chúng tôi biết mỗi tấm vải đến từ đâu và ai đã tạo ra nó.",
  },
  {
    index: "03",
    title: "Thiết kế để tồn tại lâu dài",
    body: "Xu hướng đến rồi đi. Chúng tôi thiết kế cho vòng đời 10 năm, không phải 10 mùa. Một sản phẩm tiny. mua hôm nay vẫn đẹp vào năm 2035.",
  },
  {
    index: "04",
    title: "Minh bạch từ đầu đến cuối",
    body: "Giá thành, biên lợi nhuận, tác động môi trường — chúng tôi công bố tất cả. Bởi vì người tiêu dùng xứng đáng được biết họ đang chi tiền cho điều gì.",
  },
];

const TIMELINE = [
  {
    year: "2019",
    title: "Bắt đầu từ một chiếc ví",
    body: "Minh Trí và Linh Nguyễn gặp nhau tại một workshop da thủ công ở Hội An. Ý tưởng về tiny. nảy sinh từ một cuộc trò chuyện đơn giản: tại sao đồ da Việt Nam chất lượng cao lại không có thương hiệu xứng tầm?",
  },
  {
    year: "2020",
    title: "Bộ sưu tập đầu tiên — 6 sản phẩm",
    body: "Ra mắt bộ sưu tập Nguyên Thuỷ với 6 SKU, bán qua Instagram. Sold out trong 48 giờ. Không có kế hoạch tái sản xuất — mỗi batch là duy nhất.",
  },
  {
    year: "2022",
    title: "Mở studio tại Hà Nội",
    body: "Mở không gian thiết kế và showroom đầu tiên tại Hà Nội. Đây là nơi để cộng đồng tiny. gặp gỡ, sờ tận tay vật liệu và hiểu quy trình sản xuất.",
  },
  {
    year: "2024",
    title: "Chương trình Repair, không Replace",
    body: "Ra mắt dịch vụ bảo trì trọn đời: bất kỳ sản phẩm tiny. nào cũng có thể được sửa chữa hoặc làm mới. Bởi vì thứ tốt nhất không phải là mua mới — là giữ cũ.",
  },
  {
    year: "2026",
    title: "tiny. hôm nay",
    body: "12.000+ khách hàng. 48 sản phẩm. 0 đồ tồn kho sau mỗi mùa — vì chúng tôi chỉ sản xuất đủ những gì được đặt trước.",
    active: true,
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(4);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════
          01 · HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-end pb-20 lg:pb-32">
        {/* Background image — full bleed */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop"
            alt="tiny. studio"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
        </div>

        <div className="relative z-10 max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-red-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400">
                Về chúng tôi
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-8">
              Nhỏ bé.<br />
              <span className="italic font-serif text-red-400">Có chủ đích.</span><br />
              Lâu bền.
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed">
              tiny. là thương hiệu đồ da và phụ kiện Việt Nam được xây dựng trên một tuyên ngôn đơn giản: mua ít hơn, chọn tốt hơn, giữ lâu hơn.
            </p>
          </div>

          {/* Scroll cue */}
          <div className="absolute right-12 bottom-0 flex flex-col items-center gap-3 text-white/40">
            <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center mb-6">Cuộn xuống</span>
            <div className="w-[1px] h-16 bg-white/20">
              <div className="w-full bg-white/60 animate-[grow_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          02 · STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="border-b border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {STATS.map((s) => (
              <div key={s.label} className="py-10 px-6 lg:px-12 text-center">
                <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-2">
                  {s.number}
                </p>
                <p className="text-sm text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          03 · STORY — asymmetric layout
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
            {/* Image collage */}
            <div className="relative h-[520px] lg:h-[680px]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop"
                  alt="Xưởng sản xuất tiny."
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card top-right */}
              <div className="absolute -top-6 -right-6 lg:right-[-3rem] w-48 lg:w-56 aspect-square rounded-[1.5rem] overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop"
                  alt="Sản phẩm tiny."
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating label bottom-left */}
              <div className="absolute -bottom-5 left-6 bg-gray-900 text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Thành lập tại</p>
                <p className="text-sm font-bold">Hội An, Việt Nam · 2019</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Câu chuyện</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Bắt đầu từ một câu hỏi không ai hỏi
              </h2>
              <div className="space-y-5 text-gray-500 leading-[1.9] text-[16px]">
                <p>
                  Năm 2019, Minh Trí trở về từ Copenhagen với một thứ duy nhất trong hành lý: sự thất vọng. Anh đã dành 3 năm thiết kế cho những thương hiệu châu Âu sử dụng chất liệu từ Đông Nam Á, rồi bán lại với giá gấp 10 lần cho người tiêu dùng toàn cầu.
                </p>
                <p>
                  Câu hỏi đặt ra rất đơn giản: Tại sao da bò thuộc tại Hội An — được các thương hiệu Ý và Pháp săn đón — lại không thể trở thành sản phẩm cao cấp mang thương hiệu Việt?
                </p>
                <p>
                  tiny. ra đời không phải để cạnh tranh với ai. Chúng tôi đơn giản là xây dựng thứ mình muốn dùng: đẹp, bền, trung thực và có nguồn gốc minh bạch.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <Button variant="link" className="p-0 h-auto text-gray-900 hover:text-red-500 font-bold text-base transition-all group">
                  Đọc toàn bộ câu chuyện
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          04 · VALUES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-gray-50">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Giá trị cốt lõi</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Những điều chúng tôi tin
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
              Không phải slogan. Đây là những nguyên tắc chi phối từng quyết định — từ chọn vật liệu đến định giá sản phẩm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.index}
                className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 hover:border-red-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-default"
              >
                <span className="text-[10px] font-black tracking-[0.3em] text-red-500/60 uppercase mb-5 block">
                  {v.index}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-red-500 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          05 · TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-red-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">Hành trình</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16">
            Từng dấu mốc đã làm nên tiny.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Year nav */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {TIMELINE.map((t, i) => (
                <button
                  key={t.year}
                  onClick={() => setActiveTimeline(i)}
                  className={`flex-shrink-0 text-left px-5 py-4 rounded-2xl transition-all duration-300 ${activeTimeline === i
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <span className={`block text-2xl font-black tracking-tight ${activeTimeline === i ? "text-white" : "text-gray-300"}`}>
                    {t.year}
                  </span>
                  {activeTimeline === i && (
                    <span className="block text-xs text-gray-400 mt-0.5 font-medium truncate">{t.title}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="relative">
              <div className="lg:sticky lg:top-12">
                {TIMELINE[activeTimeline] && (
                  <div className="bg-gray-50 rounded-[2rem] p-10 lg:p-14 border border-gray-100">
                    {TIMELINE[activeTimeline].active && (
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 mb-6">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Hiện tại
                      </span>
                    )}
                    <p className="text-6xl lg:text-8xl font-black text-gray-100 tracking-tight leading-none mb-6">
                      {TIMELINE[activeTimeline].year}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5 leading-snug">
                      {TIMELINE[activeTimeline].title}
                    </h3>
                    <p className="text-gray-500 leading-[1.9] text-[16px] max-w-lg">
                      {TIMELINE[activeTimeline].body}
                    </p>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-3 mt-10">
                      <button
                        onClick={() => setActiveTimeline((v) => Math.max(0, v - 1))}
                        disabled={activeTimeline === 0}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all rotate-180"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveTimeline((v) => Math.min(TIMELINE.length - 1, v + 1))}
                        disabled={activeTimeline === TIMELINE.length - 1}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-gray-400 ml-2">
                        {activeTimeline + 1} / {TIMELINE.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          07 · MISSION STATEMENT — full-bleed editorial
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-40 bg-gray-900 overflow-hidden relative">
        {/* Decorative large text background */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[18vw] font-black text-white/[0.03] tracking-tight whitespace-nowrap leading-none">
            tiny.
          </span>
        </div>

        <div className="relative z-10 max-w-[1536px] w-full mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-8 h-[1px] bg-red-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400">Sứ mệnh</span>
            <span className="w-8 h-[1px] bg-red-500" />
          </div>
          <blockquote className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-12">
            "Chúng tôi không bán sản phẩm. Chúng tôi bán{" "}
            <span className="italic font-serif text-red-400">quyết định</span>{" "}
            — quyết định chọn ít hơn nhưng tốt hơn."
          </blockquote>
          <cite className="block text-sm text-white/40 not-italic font-medium mb-16">
            — Minh Trí, Đồng sáng lập tiny.
          </cite>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 py-6 font-bold shadow-xl shadow-red-900/30 transition-all">
              Khám phá sản phẩm
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-6 font-bold transition-all">
              Đọc blog của chúng tôi
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          08 · PRESS / MEDIA — subtle strip
      ══════════════════════════════════════════════════════ */}
      <section className="border-t border-gray-100 py-14">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mb-10">
            Được nhắc đến trên
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {["Vogue Vietnam", "Highsnobiety", "Dezeen", "Monocle", "Hypebeast"].map((pub) => (
              <span
                key={pub}
                className="text-lg lg:text-xl font-black text-gray-200 tracking-tight hover:text-gray-400 transition-colors cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}