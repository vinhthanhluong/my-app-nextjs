"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowUpRight, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">

      {/* ── Left — Visual Panel ───────────────────────────── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gray-900 p-14">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
            alt="tiny. product"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/90" />
        </div>

        {/* Decorative watermark */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 text-[22vw] font-black text-white/[0.03] leading-none tracking-tight select-none pointer-events-none translate-x-12 translate-y-6"
        >
          tiny.
        </div>

        {/* Top — Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="text-2xl font-black italic font-serif text-white">tiny.</span>
          </Link>
        </div>

        {/* Middle — Quote */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-red-500" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400">
              Triết học của chúng tôi
            </span>
          </div>
          <blockquote className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-6 max-w-sm">
            "Mua ít hơn.<br />
            Chọn <span className="italic font-serif text-red-400">tốt hơn.</span><br />
            Giữ lâu hơn."
          </blockquote>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Chào mừng bạn trở lại cộng đồng những người sống có chủ đích.
          </p>
        </div>

        {/* Bottom — Product showcase pills */}
        <div className="relative z-10 flex flex-wrap gap-3">
          {["Đồ da thủ công", "Bộ sưu tập 2026", "Made in Vietnam"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-xs font-semibold border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right — Form Panel ────────────────────────────── */}
      <div className="flex flex-col justify-between min-h-screen lg:min-h-0 px-6 py-10 sm:px-12 lg:px-16 xl:px-24">

        {/* Top nav */}
        <div className="flex items-center justify-between">
          {/* Mobile logo */}
          <Link href="/" className="lg:hidden text-xl font-black italic font-serif text-gray-900">
            tiny.
          </Link>
          {/* Back */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors group ml-auto lg:ml-0"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Trang chủ
          </Link>
        </div>

        {/* Form */}
        <div className="w-full max-w-md mx-auto py-12">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-red-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                Đăng nhập
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Chào mừng trở lại
            </h1>
            <p className="mt-2 text-gray-400 text-sm">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-gray-900 font-bold hover:text-red-500 transition-colors">
                Đăng ký ngay
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Email
              </label>
              <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "email"
                ? "border-gray-900 ring-4 ring-gray-900/5"
                : "border-gray-200 hover:border-gray-300"
                }`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  placeholder="hello@example.com"
                  required
                  className="w-full px-5 py-4 bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none rounded-2xl"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Mật khẩu
                </label>
                <Link href="/forgot-password" className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "password"
                ? "border-gray-900 ring-4 ring-gray-900/5"
                : "border-gray-200 hover:border-gray-300"
                }`}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  placeholder="••••••••"
                  required
                  className="w-full pl-5 pr-12 py-4 bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none rounded-2xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-5 h-5 rounded-md border-2 border-gray-200 peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all group-hover:border-gray-400" />
                <svg
                  className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                  viewBox="0 0 20 20" fill="none"
                >
                  <path d="M5 10l3.5 3.5L15 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors select-none">
                Ghi nhớ đăng nhập
              </span>
            </label>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-red-500 text-white rounded-2xl py-6 font-bold text-sm shadow-lg hover:shadow-red-200 transition-all duration-300 mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Đang đăng nhập...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Đăng nhập
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-100" />
            <span className="text-xs text-gray-300 font-medium">hoặc tiếp tục với</span>
            <div className="flex-1 h-[1px] bg-gray-100" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                name: "Google",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                ),
              },
              {
                name: "Facebook",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <button
                key={s.name}
                className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                {s.icon}
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-300">
          © 2026 tiny. · Thiết kế tối giản từ Việt Nam
        </p>
      </div>
    </div>
  );
}