"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const ALL_POSTS = [
  {
    id: 1,
    category: "Thiết kế",
    title: "Tại sao phong cách tối giản lại lên ngôi trong năm 2026?",
    excerpt:
      "Chúng ta đang sống trong thời đại của sự bão hòa thông tin. Tối giản không chỉ là một xu hướng thẩm mỹ — đó là một phản ứng có chủ đích trước sự hỗn loạn của thế giới hiện đại.",
    date: "12 Tháng 4, 2026",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    category: "Lối sống",
    title: "5 cách để tinh gọn không gian làm việc của bạn",
    excerpt:
      "Một bàn làm việc gọn gàng không chỉ trông đẹp hơn — nó thực sự giúp bạn tập trung và làm việc hiệu quả hơn. Khám phá những bước đơn giản để tạo ra môi trường làm việc lý tưởng.",
    date: "08 Tháng 4, 2026",
    readTime: "4 phút đọc",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    category: "Cửa hàng",
    title: "Hành trình tạo ra bộ sưu tập Tiny Red đặc trưng",
    excerpt:
      "Từ những phác thảo đầu tiên đến sản phẩm hoàn chỉnh trên kệ — chúng tôi chia sẻ câu chuyện phía sau bộ sưu tập được yêu thích nhất của mình.",
    date: "01 Tháng 4, 2026",
    readTime: "7 phút đọc",
    image:
      "https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?q=80&w=688&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 4,
    category: "Thiết kế",
    title: "Màu sắc và cảm xúc: Khi đỏ trở thành ngôn ngữ thương hiệu",
    excerpt:
      "Màu đỏ không chỉ thu hút ánh nhìn — nó kể một câu chuyện. Tìm hiểu cách chúng tôi đã xây dựng bản sắc thương hiệu xung quanh một gam màu duy nhất.",
    date: "25 Tháng 3, 2026",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    category: "Lối sống",
    title: "Slow living: Nghệ thuật sống chậm trong thế giới nhanh",
    excerpt:
      "Không phải mọi thứ đều cần phải diễn ra ngay lập tức. Chúng tôi khám phá triết học sống chậm và cách nó có thể thay đổi cách bạn tiêu thụ và trân trọng đồ vật.",
    date: "18 Tháng 3, 2026",
    readTime: "8 phút đọc",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    category: "Cửa hàng",
    title: "Đóng gói bền vững: Cam kết của chúng tôi với môi trường",
    excerpt:
      "Mỗi hộp, mỗi tờ giấy gói đều là một quyết định có ý thức. Khám phá hành trình của chúng tôi hướng tới bao bì thân thiện với môi trường.",
    date: "10 Tháng 3, 2026",
    readTime: "5 phút đọc",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 7,
    category: "Thiết kế",
    title: "Typography trong thiết kế tối giản: Ít hơn là nhiều hơn",
    excerpt:
      "Khi loại bỏ mọi yếu tố trang trí, chữ viết trở thành nhân vật chính. Chúng tôi chia sẻ cách chọn font chữ để nói nhiều bằng ít ký tự nhất.",
    date: "02 Tháng 3, 2026",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    category: "Thiết kế",
    title: "Tesst",
    excerpt:
      "Khi loại bỏ mọi yếu tố trang trí, chữ viết trở thành nhân vật chính. Chúng tôi chia sẻ cách chọn font chữ để nói nhiều bằng ít ký tự nhất.",
    date: "02 Tháng 3, 2026",
    readTime: "6 phút đọc",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
];

// const CATEGORIES = ["Tất cả", "Thiết kế", "Lối sống", "Cửa hàng"];
const CATEGORIES = ["Tất cả", "Thiết kế", "Lối sống", "Cửa hàng"];
const POSTS_PER_PAGE = 6;

// ─── Subcomponents ──────────────────────────────────────────────────────────
function FeaturedPost({ post }) {
  return (
    <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 pb-20 border-b border-gray-100">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
            Nổi bật
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-[1px] bg-red-500"></span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">
              {post.category}
            </span>
          </span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
        </div>

        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-gray-500 leading-relaxed text-base">{post.excerpt}</p>

        <div className="flex items-center gap-6 pt-2">
          <span className="text-sm text-gray-400">{post.date}</span>
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
  );
}

function PostCard({ post }) {
  return (
    <article className="group cursor-pointer">
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
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="pt-2 flex items-center justify-between">
          <Button
            variant="link"
            className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all"
          >
            Đọc tiếp{" "}
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function BlogArchivePage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featured = ALL_POSTS.find((p) => p.featured);

  const filtered = ALL_POSTS.filter((post) => {
    const matchCat = activeCategory === "Tất cả" || post.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Exclude featured from grid only when showing "Tất cả" and no search
  const gridPosts =
    activeCategory === "Tất cả" && searchQuery === ""
      ? filtered.filter((p) => !p.featured)
      : filtered;

  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  // const paginated = gridPosts.slice(
  //   (currentPage - 1) * POSTS_PER_PAGE,
  //   currentPage * POSTS_PER_PAGE
  // );

  // const handleCategoryChange = (cat) => {
  //   setActiveCategory(cat);
  //   setCurrentPage(1);
  // };

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  //   setCurrentPage(1);
  // };

  // API CATEGORY
  // const handlefetchCategory = async () => {
  //   let dataCate = [];
  //   try {
  //     const res = await fetch(`https://tinycard.infinityfree.me/wp//wp-json/wp/v2/blog-category`);
  //     dataCate = await res.json();
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   } catch (error: any) {
  //     return (
  //       <div className="text-red-500">{error?.message || "Đã xảy ra lỗi!!"}</div>
  //     );
  //   }

  //   return dataCate;
  // }
  // const dataCate = handlefetchCategory();
  // console.log(dataCate)

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Note: Cleaned up the double slash 'wp//wp-json' to 'wp/wp-json'
        // const res = await fetch(`https://tinycard.infinityfree.me/wp/wp-json/wp/v2/blog-category`);
        const res = await fetch("/api/blog-category");
        console.log(res);
        if (!res.ok) throw new Error('Failed to fetch data');

        const data = await res.json();
        setCategories(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this runs once on mount
  console.log('categories', categories)
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Tin tức & Bài viết
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                <span className="italic font-serif">tiny.</span> blog
              </h1>
              <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
                Những câu chuyện, cảm hứng và quan điểm từ đội ngũ của chúng tôi — về thiết kế, lối sống và những điều nhỏ bé đáng trân trọng.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                // value={searchQuery}
                // onChange={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition-all bg-gray-50"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mt-10 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                // onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border border-gray-200 ${activeCategory === cat
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-transparent text-gray-600 hover:border-gray-400 hover:text-gray-900"
                  }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-400">
              {gridPosts.length} bài viết
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Featured Post — only show on default view */}
        {/* {activeCategory === "Tất cả" && searchQuery === "" && featured && (
          <FeaturedPost post={featured} />
        )} */}
        <FeaturedPost post={featured} />

        {/* Grid */}
        {ALL_POSTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-12">
            {ALL_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">Không tìm thấy bài viết nào.</p>
            <p className="text-sm mt-2">Hãy thử từ khoá khác hoặc chọn danh mục khác.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={true}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 ${currentPage === n
                ? "bg-gray-900 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}