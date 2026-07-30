"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart, Menu, X, User, Minus, Plus, Trash2, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// ─── Mock cart data ───────────────────────────────────────────────────────────
const INITIAL_CART = [
  {
    id: 1,
    name: "Túi Tote Tiny Red",
    variant: "Đỏ Tiny",
    price: 680000,
    qty: 1,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ví Da Mini Classic",
    variant: "Đen Clásico",
    price: 420000,
    qty: 2,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=200&auto=format&fit=crop",
  },
];

const fmt = (n) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

// ─── Mini Cart ────────────────────────────────────────────────────────────────
function MiniCart({ onClose }) {
  const [items, setItems] = useState(INITIAL_CART);

  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
        .filter((item) => item.qty > 0)
    );

  const remove = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="flex flex-col h-full">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1px] bg-red-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
              Giỏ hàng
            </span>
          </div>
          {totalQty > 0 && (
            <span className="w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-all"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Items ── */}
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <ShoppingBag className="w-7 h-7 text-gray-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700 mb-1">Giỏ hàng trống</p>
            <p className="text-xs text-gray-400">Hãy thêm sản phẩm bạn yêu thích</p>
          </div>
          <button
            onClick={onClose}
            className="mt-2 flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-red-500 transition-colors"
          >
            Khám phá sản phẩm <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5 min-h-0">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              {/* Thumbnail */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.image} alt={item.name} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate leading-snug">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.variant}</p>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Qty stepper */}
                  <div className="flex items-center gap-0 border border-gray-200 rounded-full overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-gray-900">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  {/* Line total */}
                  <span className="text-sm font-black text-gray-900 tracking-tight">
                    {fmt(item.price * item.qty)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Footer ── */}
      {items.length > 0 && (
        <div className="flex-shrink-0 border-t border-gray-100 px-6 pt-5 pb-6 space-y-4">
          {/* Free shipping progress */}
          {(() => {
            const threshold = 500000;
            const pct = Math.min((subtotal / threshold) * 100, 100);
            const remaining = threshold - subtotal;
            return (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {remaining > 0 ? (
                      <>Thêm <span className="font-bold text-gray-900">{fmt(remaining)}</span> để được miễn phí ship</>
                    ) : (
                      <span className="text-emerald-600 font-bold">🎉 Bạn được miễn phí vận chuyển!</span>
                    )}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${pct >= 100 ? "bg-emerald-400" : "bg-red-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })()}

          {/* Subtotal */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <span className="text-sm text-gray-500 font-medium">Tạm tính</span>
            <span className="text-xl font-black text-gray-900 tracking-tight">{fmt(subtotal)}</span>
          </div>

          {/* CTAs */}
          <div className="space-y-2.5">
            <Button className="w-full bg-gray-900 hover:bg-red-500 text-white rounded-2xl py-6 font-bold text-sm shadow-sm hover:shadow-red-100 transition-all duration-300">
              Thanh toán <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-gray-200 hover:bg-gray-50 rounded-2xl py-5 text-sm font-semibold text-gray-600 transition-all"
            >
              Tiếp tục mua sắm
            </Button>
          </div>

          <p className="text-center text-[10px] text-gray-300">
            Chưa bao gồm phí vận chuyển · Thuế tính khi thanh toán
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const cartCount = INITIAL_CART.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close cart on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [cartOpen]);

  // Lock body scroll when cart or mobile menu open
  useEffect(() => {
    document.body.style.overflow = cartOpen || isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen, isMobileMenuOpen]);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white md:bg-white/80 backdrop-blur-md py-3 shadow-sm border-gray-100"
            : "bg-transparent border-transparent py-3 md:py-5"
        )}
      >
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900">
            TINY<span className="text-red-500">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 text-sm lg:gap-8 lg:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Cart trigger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => { setCartOpen((v) => !v); setIsMobileMenuOpen(false); }}
              className={cn(
                "relative text-gray-600 rounded-full transition-all",
                cartOpen && "bg-gray-100 text-gray-900"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold leading-none">
                  {cartCount}
                </span>
              )}
            </Button>

            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-gray-600 gap-2">
                <User className="w-4 h-4" />
                Đăng nhập
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="hidden md:flex bg-gray-900 hover:bg-gray-800 text-white rounded-full px-5">
                Liên hệ
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600"
              onClick={() => { setIsMobileMenuOpen((v) => !v); setCartOpen(false); }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-screen bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 py-3.5 border-b border-gray-100 flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 text-gray-300" />
                </Link>
              ))}
              <Button className="w-full bg-gray-900 hover:bg-red-500 rounded-2xl mt-6 py-6 transition-all duration-300">
                Đăng nhập / Đăng ký
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* ── Cart overlay backdrop ────────────────────────────── */}
      <div
        onClick={() => setCartOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-all duration-300",
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* ── Cart drawer ──────────────────────────────────────── */}
      <div
        ref={cartRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          cartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MiniCart onClose={() => setCartOpen(false)} />
      </div>
    </>
  );
}