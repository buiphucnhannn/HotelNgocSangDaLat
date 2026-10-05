"use client";

import Link from "next/link";
import { site } from "@/data/hotel";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF6F0] pt-12 sm:pt-16 pb-12 sm:pb-16">
      {/* Nền Minimalist Mỹ thuật cao cấp: vân giấy champagne & cành thông, hoa cà phê Đà Lạt phác họa tinh tế */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/about-bg.jpg"
          alt="Họa tiết thực vật Đà Lạt thanh lịch"
          className="h-full w-full object-cover object-center opacity-70"
        />
        {/* Lớp hòa sắc mềm mại giữ độ sáng nhẹ nhàng ở trung tâm */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF6F0]/40 to-transparent" />
        {/* Chỉ giữ 1 lớp fade duy nhất bên Hero nên bỏ fade đỉnh ở đây, tránh chồng 2 lớp gây dày.
            Mờ nhẹ 2 bên sườn (mỏng) hòa tự nhiên với màu nền kem */}
        <div className="absolute inset-y-0 left-0 w-4 sm:w-8 bg-gradient-to-r from-[#FAF6F0] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-4 sm:w-8 bg-gradient-to-l from-[#FAF6F0] to-transparent" />
        {/* Dải tan mỏng ở đáy hòa nền họa tiết About vào Rooms cùng màu nền */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-[linear-gradient(to_top,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
      </div>

      {/* Khung nội dung scale rộng thoáng đạt theo chiều ngang (max-w-[1400px]) */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Cột trái: 2 ảnh sảnh lễ tân & phòng nghỉ lồng ghép nghệ thuật với kích thước mở rộng */}
          <div data-reveal="fade-right" className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[580px] lg:max-w-none">
              {/* Ảnh chính (card rộng phía sau): Sảnh lễ tân đón tiếp sang trọng có vương miện Ngọc Sang Hotel */}
              <div className="relative aspect-[4/3] w-[88%] overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/90 shadow-2xl shadow-[#700c18]/15 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src="/images/reception.jpg"
                  alt="Không gian sảnh lễ tân đón khách Ngọc Sang Hotel"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Ảnh phụ đè góc (card nhỏ phía trước): Phòng nghỉ ban công ấm áp, ngập tràn ánh sáng */}
              <div className="absolute -bottom-4 right-0 sm:-bottom-8 sm:-right-4 w-[54%] sm:w-[56%] overflow-hidden rounded-xl sm:rounded-2xl border-3 sm:border-4 border-white bg-white shadow-2xl shadow-[#700c18]/25 transition-transform duration-500 hover:scale-105 hover:rotate-1">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src="/images/room-balcony.jpg"
                    alt="Phòng nghỉ ban công tiện nghi thoáng đãng tại Ngọc Sang Hotel"
                    className="h-full w-full object-cover object-[center_60%]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-amber-400/40 rounded-xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Thông tin giới thiệu & 3 tiện ích nổi bật */}
          <div data-reveal="fade-left" className="lg:col-span-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
              VỀ CHÚNG TÔI
            </p>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#700c18] leading-[1.2]">
              Ngọc Sang Hotel
            </h2>

            <p className="mt-2 font-display text-lg sm:text-xl font-medium text-[#2C221E]/90 italic">
              Nơi bắt đầu một hành trình Đà Lạt đáng nhớ
            </p>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#5C4D45]">
              {site.description}
            </p>

            {/* 3 Tiện ích điểm nhấn với icon & viền tròn thanh lịch */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E8DCCF]/90 pt-6">
              {/* Item 1 */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#700c18] border border-[#E8DCCF] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#2C221E] leading-snug">
                  Vị trí thuận tiện tại Đà Lạt
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#700c18] border border-[#E8DCCF] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#2C221E] leading-snug">
                  Hệ thống phòng đa dạng
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#700c18] border border-[#E8DCCF] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#2C221E] leading-snug">
                  Hỗ trợ đặt phòng nhanh
                </span>
              </div>
            </div>

            {/* Nút tìm hiểu thêm */}
            <div className="mt-8">
              <Link
                href="#rooms"
                className="inline-flex items-center gap-2 rounded-full bg-[#700c18] px-8 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#861320] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Tìm hiểu thêm
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
