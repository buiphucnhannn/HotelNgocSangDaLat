"use client";

import { site } from "@/data/hotel";
import FloralDecor from "@/components/ui/FloralDecor";

export default function Location() {
  return (
    <section id="location" className="relative w-full overflow-hidden bg-[#FAF6F0] py-12 sm:py-24">
      {/* Background tinh tế đồng điệu cùng About & Rooms */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/location-bg.jpg"
          alt="Ngọc Sang Hotel Location Background"
          className="h-full w-full object-cover object-center opacity-85"
        />
        {/* Lớp phủ chuyển sắc mềm mại giúp nội dung bên trái cực kỳ êm ái và rõ ràng */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0]/90 via-[#FAF6F0]/50 to-transparent sm:from-[#FAF6F0]/85" />
        {/* Làm mờ 2 bên sườn nền hòa tự nhiên với màu nền kem */}
        <div className="absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-[#FAF6F0] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-[#FAF6F0] to-transparent" />
        {/* Dải tan mỏng ở đáy hòa nền họa tiết Location vào Gallery cùng màu nền */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-[linear-gradient(to_top,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
      </div>

      <FloralDecor position="left" className="top-8 opacity-20" />
      <FloralDecor position="right" className="bottom-4 opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Cột trái: Thông tin vị trí hòa trực tiếp với nền, không dùng card badge */}
          <div data-reveal="fade-right" className="lg:col-span-5 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
              VỊ TRÍ KHÁCH SẠN
            </p>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C221E] leading-tight">
              Thuận tiện di chuyển
              <br />
              đến nhiều điểm tham quan
            </h2>

            {/* Thông tin địa chỉ hòa vào nền tự nhiên, không đóng khung badge */}
            <div className="mt-6 flex items-start gap-3 sm:gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#700c18] text-white shadow-md shadow-[#700c18]/25 mt-0.5 transition-transform hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">Địa chỉ</p>
                <p className="text-base sm:text-lg font-bold text-[#2C221E] leading-snug">
                  {site.address}
                </p>
                <p className="text-xs sm:text-sm text-[#5C4D44] leading-relaxed max-w-md pt-0.5">
                  Trung tâm Phường 1, cách Chợ Đà Lạt ~300m, thuận tiện đi bộ, nhiều quán ăn &amp; café xung quanh.
                </p>
              </div>
            </div>

            {/* Điểm nổi bật khoảng cách di chuyển với icon vector chuyên nghiệp */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#700c18]/15 bg-[#700c18]/8 px-3.5 py-1.5 text-xs font-semibold text-[#700c18] shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Cách Chợ Đà Lạt ~300m
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2B6CB0]/20 bg-[#2B6CB0]/10 px-3.5 py-1.5 text-xs font-semibold text-[#1A4971] shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                  <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                </svg>
                Cách Hồ Xuân Hương ~500m
              </span>
            </div>

            {/* Nút xem Google Maps */}
            <div className="mt-6 sm:mt-7">
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-7 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#8e1423] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Xem trên Google Maps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Cột phải: Google Maps trực quan, rõ ràng */}
          <div data-reveal="fade-left" className="lg:col-span-7 flex justify-end">
            <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/90 bg-white shadow-xl shadow-black/10 transition-shadow duration-300 hover:shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
                <iframe
                  title="Vị trí Ngọc Sang Hotel trên Google Maps"
                  src="https://maps.google.com/maps?q=Ng%E1%BB%8Dc+Sang+Hotel%2C+20+%C4%90%C6%B0%E1%BB%9Dng+3%2F2%2C+Ph%C6%B0%E1%BB%9Dng+1%2C+Th%C3%A0nh+ph%E1%BB%91+%C4%90%C3%A0+L%E1%BA%A1t%2C+L%C3%A2m+%C4%90%E1%BB%93ng&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
