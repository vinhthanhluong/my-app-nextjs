"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogItem, BlogApiResponse } from "@/interfaces/blog";
import { formatDate } from "@/lib/utils";

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const POSTS_PER_PAGE = 6;

// ─── Subcomponents ──────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FeaturedPost({ post }: { post: BlogItem }) {
  const image = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://thanhlv.ju.alive-web.site/wp/wp-content/themes/wp-templ/assets/img/blog/blog-eyecatch.jpg";

  return (
    <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 pb-20 border-b border-gray-100">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={post?.title.rendered}
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
              {post?._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0] && post._embedded['wp:term'][0][0].name}
            </span>
          </span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400 font-medium">{formatDate(post?.date)}</span>
        </div>

        <h2 className="line-clamp-2 text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
          {post?.title.rendered}
        </h2>

        <p className="line-clamp-4 text-gray-500 leading-relaxed text-base">{post?.content.rendered}</p>

        <div className="flex items-center gap-6 pt-2">
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

function PostCard({ post }: { post: BlogItem }) {
  const image = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://thanhlv.ju.alive-web.site/wp/wp-content/themes/wp-templ/assets/img/blog/blog-eyecatch.jpg";
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
        <img
          src={image}
          alt={post?.title.rendered}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
            {post?._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0] && post._embedded['wp:term'][0][0].name}
          </span>
          <span className="text-xs text-gray-400 font-medium">{formatDate(post?.date)}</span>
        </div>
        <h3 className="line-clamp-2 text-xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
          {post?.title.rendered}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post?.content.rendered}</p>
        <div className="pt-2 flex items-center justify-between">
          <Button
            variant="link"
            className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all"
          >
            Đọc tiếp{" "}
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          {/* <span className="text-xs text-gray-400">{post.modified}</span> */}
        </div>
      </div>
    </article>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function BlogArchivePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // API BLOG CAT
  const [dataBlogcat, setDataBlogcat] = useState([]);
  useEffect(() => {
    const handlefetchCategoryBlog = async () => {
      try {
        const resBlogcat = await fetch("/api/blogcat");
        const text = await resBlogcat.text();

        if (!resBlogcat.ok) {
          throw new Error(`API lỗi ${resBlogcat.status}: ${text}`);
        }

        const data = JSON.parse(text);
        setDataBlogcat(data);
      } catch (error) {
        console.error("Blogcat error:", error);
      }
    };

    handlefetchCategoryBlog();
  }, []);

  // API BLOG ITEM
  const [dataBlog, setDataBlog] = useState<BlogApiResponse>({ data: [], pagination: {} });
  useEffect(() => {
    const handlefetchBlog = async () => {
      try {
        const resBlogcat = await fetch("/api/blog");
        const text = await resBlogcat.text();

        if (!resBlogcat.ok) {
          throw new Error(`API lỗi ${resBlogcat.status}: ${text}`);
        }

        const data = JSON.parse(text);
        setDataBlog(data);
      } catch (error) {
        console.error("Blog error:", error);
      }
    };

    handlefetchBlog();
  }, []);
  const featured = dataBlog?.data?.find((p: BlogItem) => p.acf?.featured_post);

  const filtered = dataBlog?.data?.filter((post: BlogItem) => {
    const matchCat = activeCategory === "all" || post.blogcat.includes(Number(activeCategory));
    const matchSearch =
      searchQuery === "" ||
      post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.rendered.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Exclude featured from grid only when showing "Tất cả" and no search
  const gridPosts = activeCategory === "all" && searchQuery === "" ? filtered.filter((p: BlogItem) => !p?.acf?.featured_post) : filtered;
  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  // const paginated = gridPosts.slice(
  //   (currentPage - 1) * POSTS_PER_PAGE,
  //   currentPage * POSTS_PER_PAGE
  // );

  const handleCategoryChange = (cat: string | number) => {
    setActiveCategory(String(cat));
    setCurrentPage(1);
  };

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  //   setCurrentPage(1);
  // };




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
            {/* ALL */}
            <button
              key="all"
              onClick={() => handleCategoryChange("all")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === "all"
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-transparent border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                }`}
            >
              Tất cả
            </button>
            {/* Categories */}
            {dataBlogcat.map((cat: { id: number, name: string }) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border border-gray-200 ${activeCategory === String(cat.id)
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-transparent text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                  }`}
              >
                {cat.name}
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
        {activeCategory === "all" && searchQuery === "" && featured && (
          <FeaturedPost post={featured} />
        )}
        {/* Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-12">
            {gridPosts.map((post: BlogItem) => (
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