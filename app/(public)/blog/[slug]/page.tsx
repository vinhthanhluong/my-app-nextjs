"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowLeft,
  Link2,
  Star,
  Rss,
  Clock,
  Calendar,
} from "lucide-react";

// ─── Mock article data ────────────────────────────────────────────────────────
const ARTICLE = {
  category: "Thiết kế",
  title: "Tại sao phong cách tối giản lại lên ngôi trong năm 2026?",
  subtitle:
    "Chúng ta đang sống trong thời đại của sự bão hòa thông tin. Tối giản không chỉ là một xu hướng thẩm mỹ — đó là một phản ứng có chủ đích.",
  date: "12 Tháng 4, 2026",
  readTime: "5 phút đọc",
  author: {
    name: "Linh Nguyễn",
    role: "Giám đốc Sáng tạo",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  coverImage:
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600&auto=format&fit=crop",
  content: [
    {
      type: "paragraph",
      text: "Trong một thế giới nơi mỗi ngày chúng ta tiếp nhận hàng nghìn thông điệp quảng cáo, hàng triệu bài đăng trên mạng xã hội và vô số thông báo từ thiết bị điện tử — sự tối giản không còn là một lựa chọn thẩm mỹ đơn thuần. Nó đã trở thành một tuyên ngôn về sức khỏe tinh thần.",
    },
    {
      type: "paragraph",
      text: "Phong trào này không bắt đầu từ năm 2026. Nhưng chính sự bùng nổ của AI-generated content và công nghệ immersive trong những năm gần đây đã tạo ra một phản ứng ngược: người tiêu dùng ngày càng khao khát sự chân thực, sự đơn giản và những khoảng trống để thở.",
    },
    {
      type: "quote",
      text: "Thiết kế tốt không thêm vào — nó bỏ đi. Và khi bạn bỏ đi đủ nhiều, điều còn lại mới thực sự có ý nghĩa.",
      author: "Dieter Rams",
    },
    {
      type: "heading",
      text: "Tối giản không phải là trống rỗng",
    },
    {
      type: "paragraph",
      text: "Một trong những hiểu lầm phổ biến nhất về chủ nghĩa tối giản là nó đồng nghĩa với sự trống rỗng hay lạnh lùng. Thực ra, tối giản đúng nghĩa đòi hỏi nhiều suy nghĩ hơn, không phải ít hơn. Mỗi yếu tố được giữ lại phải chứng minh sự tồn tại của mình.",
    },
    {
      type: "paragraph",
      text: "Nhìn vào những thương hiệu đang dẫn đầu xu hướng này — từ các nhãn hàng thời trang Nhật Bản đến những studio thiết kế Bắc Âu — bạn sẽ thấy rằng \"ít\" không có nghĩa là \"không có gì\". Thay vào đó, đó là sự chắt lọc: chỉ giữ lại những gì thực sự cần thiết, và làm cho phần đó thật hoàn hảo.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200&auto=format&fit=crop",
      caption: "Không gian làm việc được thiết kế theo nguyên tắc tối giản — mỗi vật dụng đều có lý do tồn tại.",
    },
    {
      type: "heading",
      text: "Ba nguyên tắc của tối giản hiện đại",
    },
    {
      type: "paragraph",
      text: "Chúng tôi đã nghiên cứu hơn 200 thương hiệu và dự án thiết kế trong năm vừa qua, và rút ra được ba nguyên tắc cốt lõi định nghĩa tối giản thành công trong thời đại hiện nay:",
    },
    {
      type: "list",
      items: [
        "Mục đích trước thẩm mỹ: Mỗi quyết định thiết kế bắt đầu từ câu hỏi \"tại sao\" chứ không phải \"trông như thế nào\".",
        "Không gian âm thanh như là ngôn ngữ: Khoảng trắng, sự im lặng và những khoảng nghỉ không còn bị xem là lãng phí — chúng là công cụ truyền đạt cảm xúc.",
        "Chất liệu trung thực: Xu hướng hướng tới vật liệu thô, tự nhiên và chưa qua xử lý nhiều — gỗ thực, đá thực, vải thực.",
      ],
    },
    {
      type: "paragraph",
      text: "Tiny. được xây dựng trên những nguyên tắc này từ ngày đầu. Khi chúng tôi thiết kế một sản phẩm mới, câu hỏi đầu tiên luôn là: \"Chúng ta có thể bỏ đi gì?\" Và thường thì câu trả lời khiến chúng tôi ngạc nhiên.",
    },
  ],
};

// ─── Related posts ─────────────────────────────────────────────────────────
const RELATED = [
  {
    id: 2,
    category: "Lối sống",
    title: "5 cách để tinh gọn không gian làm việc của bạn",
    date: "08 Tháng 4, 2026",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Thiết kế",
    title: "Màu sắc và cảm xúc: Khi đỏ trở thành ngôn ngữ thương hiệu",
    date: "25 Tháng 3, 2026",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Thiết kế",
    title: "Typography trong thiết kế tối giản: Ít hơn là nhiều hơn",
    date: "02 Tháng 3, 2026",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
  },
];

// ─── Content renderer ─────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RenderContent({ blocks }: { blocks: any }) {
  return (
    <div className="space-y-7">
      {blocks.map((block: any, i: number) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-gray-600 leading-[1.9] text-[17px]">
              {block.text}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-gray-900 pt-4 pb-1"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-[3px] border-red-500 pl-7 py-2 my-10"
            >
              <p className="text-xl font-semibold text-gray-800 italic leading-relaxed font-serif">
                "{block.text}"
              </p>
              {block.author && (
                <cite className="block mt-3 text-sm text-gray-400 not-italic font-medium">
                  — {block.author}
                </cite>
              )}
            </blockquote>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={i} className="my-10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={block.src}
                  alt={block.caption}
                  className="w-full object-cover aspect-[16/7]"
                />
              </div>
              {block.caption && (
                <figcaption className="text-center text-sm text-gray-400 mt-4 px-6">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-4">
              {block.items.map((item: string, j: number) => (
                <li key={j} className="flex items-start gap-4 text-gray-600 text-[17px] leading-[1.8]">
                  <span className="flex-shrink-0 w-5 h-5 mt-[3px] rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Back nav ───────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 pt-8">
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Quay lại Blog
        </button>
      </div>

      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 pt-12 pb-0">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="flex items-center gap-2  max-md:w-full">
            <span className="w-6 h-[1px] bg-red-500"></span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">
              {ARTICLE.category}
            </span>
          </span>
          <span className="text-gray-200 max-md:hidden">·</span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            {ARTICLE.date}
          </span>
          <span className="text-gray-200">·</span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" />
            {ARTICLE.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {ARTICLE.title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-10">
          {ARTICLE.subtitle}
        </p>

        {/* Author + Share */}
        <div className="flex justify-end gap-6 pb-10 border-b border-gray-100">
          {/* Social Share */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Chia sẻ:</span>
            {[
              { icon: Star, label: "Facebook" },
              { icon: Rss, label: "Twitter" },
              { icon: Link2, label: "Copy link" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                title={label}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cover image ────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 mt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={ARTICLE.coverImage}
            alt={ARTICLE.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Body layout: sidebar + content ─────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 mt-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
          {/* Left sidebar — sticky table of contents placeholder */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 pr-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                Trong bài này
              </p>
              <nav className="space-y-2">
                {["Tối giản không phải là trống rỗng", "Ba nguyên tắc của tối giản hiện đại"].map((h) => (
                  <button
                    key={h}
                    className="block text-sm text-gray-500 hover:text-red-500 text-left leading-relaxed transition-colors"
                  >
                    {h}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main article */}
          <article className="lg:px-0">
            <RenderContent blocks={ARTICLE.content} />

            {/* Tags */}
            <div className="flex items-center flex-wrap gap-2 mt-12 pt-10 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-medium mr-1">Thẻ:</span>
              {["Tối giản", "Thiết kế", "Xu hướng 2026", "Thương hiệu"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 font-medium hover:border-gray-400 hover:text-gray-900 cursor-pointer transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Right side — empty gutter on large screens */}
          {/* <div className="hidden lg:block" /> */}
        </div>
      </div>

      {/* ── Related posts ───────────────────────────────────── */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Bài viết liên quan
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Bạn cũng có thể thích
              </h2>
            </div>
            <Button
              variant="outline"
              className="border-gray-200 hover:bg-gray-50 rounded-full px-8"
            >
              Xem tất cả bài viết
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-8 gap-10">
            {RELATED.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="pt-2">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all"
                    >
                      Đọc tiếp{" "}
                      <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}