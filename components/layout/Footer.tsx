import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const IconSocial = [
    { name: "Ins", label: "Instagram" },
    { name: "Fb", label: "Facebook" },
    { name: "Tw", label: "Twitter" },
  ];
  const Menu1 = [
    "Sản phẩm mới",
    "Bán chạy nhất",
    "Bộ sưu tập Red",
    "Phụ kiện Tech",
  ];
  const Menu2 = [
    "Giao hàng & Đổi trả",
    "Chính sách bảo mật",
    "Điều khoản sử dụng",
    "Liên hệ",
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Cột 1: Logo & Giới thiệu */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-gray-900"
            >
              TINY<span className="text-red-500">.</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Thương hiệu phong cách sống tối giản, chuyên cung cấp các phụ kiện
              công nghệ và đồ gia dụng cao cấp.
            </p>

            {/* Social Links dạng Text - Sạch sẽ và không lo lỗi module */}
            <div className="flex gap-5 pt-2">
              {IconSocial.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-red-500 transition-colors"
                >
                  {social.name}
                  {/* Đường gạch chân nhỏ khi hover đúng chất tiny */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Cột 2 & 3: Links điều hướng */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
                Mua sắm
              </h4>
              <ul className="space-y-4">
                {Menu1.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
                Hỗ trợ
              </h4>
              <ul className="space-y-4">
                {Menu2.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cột 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Nhận tin mới nhất
            </h4>
            <p className="text-sm text-gray-500">
              Đăng ký để nhận thông báo về bộ sưu tập mới sớm nhất.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-sm focus:outline-none focus:border-red-500/50 transition-all"
              />
              <Button className="absolute right-2 top-2 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-red-500 transition-all">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © 2026 TINY STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-4 opacity-30 grayscale"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4 opacity-30 grayscale"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-4 opacity-30 grayscale"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
