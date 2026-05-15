"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowUpRight, ArrowLeft, Check } from "lucide-react";

// ── Password strength ───────────────────────────────────────────────────────
const getStrength = (pw) => {
  if (!pw) return { score: 0, label: "", color: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map = [
    { label: "Quá yếu", color: "bg-red-400" },
    { label: "Yếu", color: "bg-orange-400" },
    { label: "Trung bình", color: "bg-yellow-400" },
    { label: "Mạnh", color: "bg-emerald-400" },
    { label: "Rất mạnh", color: "bg-emerald-500" },
  ];
  return { score, ...map[score] };
};

// ── Step indicator ──────────────────────────────────────────────────────────
const STEPS = ["Tài khoản", "Cá nhân", "Hoàn tất"];

function StepBar({ current }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${done
                ? "bg-gray-900 text-white"
                : active
                  ? "bg-red-500 text-white ring-4 ring-red-100"
                  : "bg-gray-100 text-gray-400"
                }`}>
                {done ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${active ? "text-red-500" : done ? "text-gray-900" : "text-gray-300"
                }`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-[1px] mb-5 mx-2 transition-colors duration-500 ${done ? "bg-gray-900" : "bg-gray-100"}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
    firstName: "",
    lastName: "",
    phone: "",
    agree: false,
    newsletter: false,
  });

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const strength = getStrength(form.password);
  const passwordMatch = form.password && form.confirm && form.password === form.confirm;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 2) setStep((s) => s + 1);
    else {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const Field = ({ id, label, type = "text", value, onChange, placeholder, extra, required }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {label}
        </label>
        {extra}
      </div>
      <div className={`rounded-2xl border transition-all duration-200 ${focused === id
        ? "border-gray-900 ring-4 ring-gray-900/5"
        : "border-gray-200 hover:border-gray-300"
        }`}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused("")}
          placeholder={placeholder}
          required={required}
          className="w-full px-5 py-4 bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none rounded-2xl"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">

      {/* ── Left — Visual Panel ──────────────────────────── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gray-900 p-14">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop"
            alt="tiny. atelier"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/95" />
        </div>

        {/* Large watermark */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 text-[22vw] font-black text-white/[0.03] leading-none tracking-tight select-none pointer-events-none translate-x-12 translate-y-6"
        >
          tiny.
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-black italic font-serif text-white">
            tiny.
          </Link>
        </div>

        {/* Benefits list */}
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-8 h-[1px] bg-red-500" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-400">
              Quyền lợi thành viên
            </span>
          </div>
          {[
            { title: "Ưu tiên đặt hàng trước", sub: "Nhận thông báo trước khi bộ sưu tập mới ra mắt" },
            { title: "Dịch vụ sửa chữa miễn phí", sub: "Trọn đời cho tất cả sản phẩm tiny. của bạn" },
            { title: "Cộng đồng tiny. Members", sub: "Tham gia các workshop và sự kiện độc quyền" },
            { title: "Tích điểm mỗi đơn hàng", sub: "Đổi điểm lấy sản phẩm hoặc nâng cấp miễn phí" },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{b.title}</p>
                <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="relative z-10">
          <div className="flex -space-x-2 mb-3">
            {[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=80",
            ].map((src, i) => (
              <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-900 flex-shrink-0">
                <Image src={src} alt="" width={32} height={32} className="object-cover" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
              +12K
            </div>
          </div>
          <p className="text-xs text-white/40">
            Tham gia cùng <span className="text-white/70 font-semibold">12.000+ thành viên</span> đang sống có chủ đích
          </p>
        </div>
      </div>

      {/* ── Right — Form Panel ──────────────────────────── */}
      <div className="flex flex-col justify-between min-h-screen lg:min-h-0 px-6 py-10 sm:px-12 lg:px-16 xl:px-24">

        {/* Top nav */}
        <div className="flex items-center justify-between">
          <Link href="/" className="lg:hidden text-xl font-black italic font-serif text-gray-900">
            tiny.
          </Link>
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
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-red-500" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                Tạo tài khoản
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {step === 0 && "Bắt đầu hành trình"}
              {step === 1 && "Giới thiệu bản thân"}
              {step === 2 && "Gần xong rồi!"}
            </h1>
            <p className="mt-2 text-gray-400 text-sm">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-gray-900 font-bold hover:text-red-500 transition-colors">
                Đăng nhập
              </Link>
            </p>
          </div>

          {/* Step indicator */}
          <StepBar current={step} />

          <form onSubmit={handleNext} className="space-y-5">

            {/* ── Step 0: Account ── */}
            {step === 0 && (
              <>
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="hello@example.com"
                  required
                />

                {/* Password with strength meter */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Mật khẩu
                  </label>
                  <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "password"
                    ? "border-gray-900 ring-4 ring-gray-900/5"
                    : "border-gray-200 hover:border-gray-300"
                    }`}>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={set("password")}
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused("")}
                      placeholder="Tối thiểu 8 ký tự"
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

                  {/* Strength bar */}
                  {form.password && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex gap-1">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength.score ? strength.color : "bg-gray-100"
                              }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">
                        Độ mạnh:{" "}
                        <span className={`font-bold ${strength.score <= 1 ? "text-red-400"
                          : strength.score === 2 ? "text-yellow-500"
                            : "text-emerald-500"
                          }`}>
                          {strength.label}
                        </span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm password */}
                <div className="space-y-2">
                  <label htmlFor="confirm" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Xác nhận mật khẩu
                  </label>
                  <div className={`relative rounded-2xl border transition-all duration-200 ${focused === "confirm"
                    ? "border-gray-900 ring-4 ring-gray-900/5"
                    : form.confirm && !passwordMatch
                      ? "border-red-300 ring-4 ring-red-50"
                      : passwordMatch
                        ? "border-emerald-300 ring-4 ring-emerald-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}>
                    <input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      value={form.confirm}
                      onChange={set("confirm")}
                      onFocus={() => setFocused("confirm")}
                      onBlur={() => setFocused("")}
                      placeholder="Nhập lại mật khẩu"
                      required
                      className="w-full pl-5 pr-12 py-4 bg-transparent text-gray-900 placeholder:text-gray-300 text-sm font-medium focus:outline-none rounded-2xl"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {form.confirm && (
                        passwordMatch
                          ? <Check className="w-4 h-4 text-emerald-500" />
                          : <span className="text-red-400 text-xs font-bold">✕</span>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        className="text-gray-300 hover:text-gray-600 transition-colors"
                      >
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* ── Step 1: Personal ── */}
            {step === 1 && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    id="firstName"
                    label="Họ"
                    value={form.firstName}
                    onChange={set("firstName")}
                    placeholder="Nguyễn"
                    required
                  />
                  <Field
                    id="lastName"
                    label="Tên"
                    value={form.lastName}
                    onChange={set("lastName")}
                    placeholder="Linh"
                    required
                  />
                </div>
                <Field
                  id="phone"
                  label="Số điện thoại"
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="0912 345 678"
                />

                {/* Preferences */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Bạn quan tâm đến?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Túi xách", "Ví", "Balo", "Phụ kiện", "Bộ sưu tập mới", "Hàng giới hạn"].map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-500 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ── Step 2: Confirm ── */}
            {step === 2 && (
              <>
                {/* Summary card */}
                <div className="bg-gray-50 rounded-2xl p-5 space-y-3 mb-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Xác nhận thông tin</p>
                  {[
                    { label: "Email", value: form.email || "—" },
                    { label: "Họ tên", value: `${form.firstName || "—"} ${form.lastName || ""}`.trim() },
                    { label: "Điện thoại", value: form.phone || "—" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-xs text-gray-400 font-medium">{row.label}</span>
                      <span className="text-sm font-bold text-gray-900">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Agreements */}
                <div className="space-y-3">
                  {[
                    {
                      id: "agree",
                      checked: form.agree,
                      onChange: set("agree"),
                      label: (
                        <>
                          Tôi đồng ý với{" "}
                          <Link href="#" className="text-gray-900 font-bold underline underline-offset-2 hover:text-red-500 transition-colors">
                            Điều khoản dịch vụ
                          </Link>{" "}
                          và{" "}
                          <Link href="#" className="text-gray-900 font-bold underline underline-offset-2 hover:text-red-500 transition-colors">
                            Chính sách bảo mật
                          </Link>
                        </>
                      ),
                      required: true,
                    },
                    {
                      id: "newsletter",
                      checked: form.newsletter,
                      onChange: set("newsletter"),
                      label: "Nhận thông báo về sản phẩm mới và ưu đãi từ tiny.",
                    },
                  ].map(({ id, checked, onChange, label, required }) => (
                    <label key={id} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={onChange}
                          required={required}
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 rounded-md border-2 border-gray-200 peer-checked:bg-gray-900 peer-checked:border-gray-900 group-hover:border-gray-400 transition-all" />
                        <Check className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none p-0.5" />
                      </div>
                      <span className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </>
            )}

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-900 transition-all flex-shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gray-900 hover:bg-red-500 text-white rounded-2xl py-6 font-bold text-sm shadow-lg hover:shadow-red-200 transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Đang tạo tài khoản...
                  </span>
                ) : step < 2 ? (
                  <span className="flex items-center gap-2">
                    Tiếp theo
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Tạo tài khoản
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Social signup — only on step 0 */}
          {step === 0 && (
            <>
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-[1px] bg-gray-100" />
                <span className="text-xs text-gray-300 font-medium">hoặc đăng ký với</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
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
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-300">
          © 2026 tiny. · Thiết kế tối giản từ Việt Nam
        </p>
      </div>
    </div>
  );
}