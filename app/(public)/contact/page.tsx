"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  // Instagram,
  // Facebook,
  Radio,
  Send,
  Check,
  ChevronDown,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@tiny.vn",
    sub: "Phản hồi trong 24 giờ",
    href: "mailto:hello@tiny.vn",
  },
  {
    icon: Phone,
    label: "Điện thoại",
    value: "0909 123 456",
    sub: "Thứ Hai – Thứ Sáu, 9:00 – 18:00",
    href: "tel:0909123456",
  },
  {
    icon: Radio,
    label: "Instagram",
    value: "@tiny.studio",
    sub: "DM để được hỗ trợ nhanh nhất",
    href: "#",
  },
  {
    icon: Radio,
    label: "Facebook",
    value: "tiny. Vietnam",
    sub: "Cộng đồng & cập nhật mới",
    href: "#",
  },
];

const LOCATIONS = [
  {
    city: "Hà Nội",
    address: "28 Hàng Bông, Hoàn Kiếm",
    hours: "Thứ 3 – CN, 10:00 – 20:00",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop",
    tag: "Showroom & Studio",
  },
  {
    city: "Hồ Chí Minh",
    address: "12 Lý Tự Trọng, Quận 1",
    hours: "Thứ 2 – CN, 09:00 – 21:00",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800&auto=format&fit=crop",
    tag: "Flagship Store",
  },
  {
    city: "Hội An",
    address: "64 Trần Phú, phố cổ",
    hours: "Thứ 3 – CN, 09:00 – 18:00",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop",
    tag: "Xưởng sản xuất",
  },
];

const TOPICS = [
  "Đặt hàng & thanh toán",
  "Vận chuyển & đổi trả",
  "Bảo hành & sửa chữa",
  "Hợp tác thương hiệu",
  "Báo chí & truyền thông",
  "Khác",
];

const FAQS = [
  {
    q: "Tôi có thể đổi/trả hàng trong bao lâu?",
    a: "tiny. áp dụng chính sách đổi trả trong vòng 30 ngày kể từ ngày nhận hàng. Sản phẩm cần còn nguyên tem, chưa qua sử dụng và có hoá đơn mua hàng.",
  },
  {
    q: "Sản phẩm có bảo hành không?",
    a: "Tất cả sản phẩm tiny. được bảo hành 12 tháng với lỗi nhà sản xuất. Ngoài ra, chúng tôi cung cấp dịch vụ sửa chữa trọn đời với chi phí ưu đãi dành cho thành viên.",
  },
  {
    q: "Thời gian giao hàng là bao lâu?",
    a: "Nội thành Hà Nội và TP.HCM: 1–2 ngày làm việc. Toàn quốc: 3–5 ngày làm việc. Miễn phí vận chuyển cho đơn từ 500.000₫.",
  },
  {
    q: "Tôi có thể đặt may theo yêu cầu không?",
    a: "tiny. nhận đặt may riêng (bespoke) với số lượng tối thiểu. Vui lòng liên hệ trực tiếp qua email hello@tiny.vn hoặc đến studio Hà Nội để được tư vấn.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function FormInput({ id, label, type = "text", value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
        {label}
      </label>
      <div className={`rounded-2xl border transition-all duration-200 ${focused
        ? "border-gray-900 ring-4 ring-gray-900/[0.06] bg-white"
        : "border-gray-200 hover:border-gray-300 bg-gray-50/60"
        }`}>
        <input
          id={id} type={type} value={value} onChange={onChange}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          placeholder={placeholder} required={required}
          className="w-full px-5 py-[14px] bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none rounded-2xl"
        />
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-sm font-bold leading-snug transition-colors duration-200 pr-6 ${open ? "text-red-500" : "text-gray-900 group-hover:text-red-500"}`}>
          {q}
        </span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180 text-red-500" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);
  const [msgFocused, setMsgFocused] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="border-b border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Liên hệ
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.2] mb-6">
                Chúng tôi<br />
                luôn <span className="italic font-serif text-red-500">lắng nghe.</span>
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-md text-[16px]">
                Dù bạn có câu hỏi về sản phẩm, muốn hợp tác hay chỉ đơn giản là muốn nói chuyện về thiết kế tối giản — hộp thư của chúng tôi luôn mở.
              </p>
            </div>

            {/* Right — channel cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHANNELS.map(({ icon: Icon, label, value, sub, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-start gap-4 p-5 rounded-[1.5rem] border border-gray-100 hover:border-gray-200 hover:bg-gray-50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 truncate">
                      {value}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">{sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT FORM + FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

            {/* ── Form ──────────────────────────────────────── */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Gửi tin nhắn
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Kể cho chúng tôi nghe
              </h2>

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      id="name" label="Họ và tên"
                      value={form.name} onChange={set("name")}
                      placeholder="Nguyễn Linh" required
                    />
                    <FormInput
                      id="email" label="Email" type="email"
                      value={form.email} onChange={set("email")}
                      placeholder="hello@example.com" required
                    />
                  </div>

                  {/* Topic dropdown */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Chủ đề
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setTopicOpen((v) => !v)}
                        className={`w-full flex items-center justify-between px-5 py-[14px] rounded-2xl border text-sm font-medium transition-all duration-200 text-left ${topicOpen
                          ? "border-gray-900 ring-4 ring-gray-900/[0.06] bg-white text-gray-900"
                          : form.topic
                            ? "border-gray-200 bg-gray-50/60 text-gray-900 hover:border-gray-300"
                            : "border-gray-200 bg-gray-50/60 text-gray-300 hover:border-gray-300"
                          }`}
                      >
                        <span>{form.topic || "Chọn chủ đề..."}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${topicOpen ? "rotate-180" : ""}`} />
                      </button>
                      {topicOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-20 py-1.5">
                          {TOPICS.map((t) => (
                            <button
                              key={t} type="button"
                              onClick={() => { setForm((f) => ({ ...f, topic: t })); setTopicOpen(false); }}
                              className={`w-full text-left px-5 py-3 text-sm transition-colors duration-150 ${form.topic === t
                                ? "text-red-500 font-bold bg-red-50/50"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
                                }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Tin nhắn
                    </label>
                    <div className={`rounded-2xl border transition-all duration-200 ${msgFocused
                      ? "border-gray-900 ring-4 ring-gray-900/[0.06] bg-white"
                      : "border-gray-200 hover:border-gray-300 bg-gray-50/60"
                      }`}>
                      <textarea
                        id="message" rows={5}
                        value={form.message} onChange={set("message")}
                        onFocus={() => setMsgFocused(true)} onBlur={() => setMsgFocused(false)}
                        placeholder="Bạn muốn nói gì với chúng tôi?"
                        required
                        className="w-full px-5 py-4 bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none resize-none rounded-2xl leading-relaxed"
                      />
                    </div>
                    <p className="text-xs text-gray-300 text-right">
                      {form.message.length} ký tự
                    </p>
                  </div>

                  <Button
                    type="submit" disabled={loading}
                    className="w-full bg-gray-900 hover:bg-red-500 text-white rounded-2xl py-6 font-bold text-sm shadow-sm hover:shadow-red-100 transition-all duration-300"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Đang gửi...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Gửi tin nhắn
                      </span>
                    )}
                  </Button>
                </form>
              ) : (
                /* ── Success state ── */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <Check className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Đã nhận được tin nhắn!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                    Chúng tôi sẽ phản hồi bạn qua email <span className="font-bold text-gray-700">{form.email}</span> trong vòng 24 giờ làm việc.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", topic: "", message: "" }); }}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Gửi tin nhắn khác
                  </button>
                </div>
              )}
            </div>

            {/* ── FAQ ───────────────────────────────────────── */}
            <div className="lg:pt-[68px]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Câu hỏi thường gặp
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Có thể bạn cần
              </h2>
              <div className="rounded-[1.5rem] border border-gray-100 overflow-hidden px-6">
                {FAQS.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>

              {/* Response time badge */}
              <div className="mt-6 flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">Thời gian phản hồi trung bình</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Email: <span className="font-semibold text-gray-700">dưới 4 giờ</span> trong giờ làm việc · DM Instagram: <span className="font-semibold text-gray-700">dưới 1 giờ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOCATIONS
      ══════════════════════════════════════════════════════ */}
      <section className="border-t border-gray-100 py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Địa điểm
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Tìm chúng tôi ở đây
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Ghé thăm studio để trải nghiệm sản phẩm trực tiếp — sờ chất liệu, thử form dáng và nói chuyện cùng đội ngũ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={loc.image} alt={loc.city} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {loc.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {loc.city}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-500">{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-500">{loc.hours}</span>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <button className="flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                      Xem bản đồ
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
        {/* Watermark */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[20vw] font-black text-white/[0.03] tracking-tight leading-none whitespace-nowrap">
            tiny.
          </span>
        </div>

        <div className="relative z-10 max-w-[1536px] w-full mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-red-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400">
              Hợp tác
            </span>
            <span className="w-8 h-[1px] bg-red-500" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Bạn là nhà thiết kế,<br />
            nhiếp ảnh gia hoặc content creator?
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto leading-relaxed text-[15px]">
            Chúng tôi luôn tìm kiếm những cộng sự chia sẻ triết học tối giản. Hãy giới thiệu bản thân — chúng tôi sẽ đọc từng email.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-10 py-6 font-bold shadow-xl shadow-red-900/30 transition-all">
              Gửi hồ sơ hợp tác
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 rounded-full px-10 py-6 font-bold transition-all">
              Xem sản phẩm của chúng tôi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}