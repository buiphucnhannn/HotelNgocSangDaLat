"use client";

import Link from "next/link";
import { site, navLinks } from "@/data/hotel";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#160E0B] text-[#D4C5BD] pt-8 pb-5 sm:pt-9 sm:pb-6">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        {/* Hàng chính: Căn giữa đối xứng hoàn hảo trên mobile, 3 cụm chia đều trên desktop */}
        <div data-reveal="fade-up" className="flex flex-col items-center lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-7">
          {/* Cụm trái: Logo thương hiệu + Tên + Subtitle căn giữa trên mobile */}
          <Link href="#home" className="group flex items-center justify-center gap-3 text-left">
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-amber-300/80 bg-[#160E0B] shadow-md transition-all duration-300 group-hover:scale-105">
              <img
                src="/images/logo.jpg"
                alt="Ngọc Sang Hotel Logo"
                className="h-full w-full object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-amber-200">
                NGỌC SANG HOTEL
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] text-amber-200/90 transition-colors duration-300">
                ĐÀ LẠT • VIỆT NAM
              </span>
            </div>
          </Link>

          {/* Cụm giữa: 5 nút điều hướng căn giữa chuẩn 100% trên mobile */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 text-xs sm:text-sm font-medium text-[#C9BCB5]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-[#E8C582]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cụm phải: Hotline & Địa chỉ căn giữa trên mobile, căn phải trên desktop */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <p className="text-sm text-[#A8988F]">
              Hotline:{" "}
              <a
                href={site.phoneHref}
                className="font-bold text-base text-white tracking-wide hover:text-[#E8C582] transition-colors"
              >
                {site.phone}
              </a>
            </p>
            <p className="mt-1 text-xs text-[#8E7E75]">
              {site.address}
            </p>
          </div>
        </div>

        {/* Đường kẻ mỏng thanh nhã */}
        <div className="w-full border-t border-white/10" />

        {/* Hàng dưới: Bản quyền căn giữa chuẩn mẫu */}
        <div className="pt-4 text-center text-xs text-[#8E7E75]">
          <p>© {new Date().getFullYear()} Ngọc Sang Hotel. Một chốn nghỉ ấm áp giữa lòng Đà Lạt.</p>
        </div>
      </div>
    </footer>
  );
}
