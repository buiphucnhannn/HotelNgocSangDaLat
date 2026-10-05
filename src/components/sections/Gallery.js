"use client";

import { useState } from "react";
import { galleryList } from "@/data/hotel";

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % galleryList.length);
  };

  // Lấy danh sách 5 ảnh xoay vòng liên tục
  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const idx = (startIndex + i) % galleryList.length;
    visibleItems.push(galleryList[idx]);
  }

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#FAF6F0] pt-14 sm:pt-16 pb-16 sm:pb-20">
      {/* Nền Minimalist Mỹ thuật cao cấp: vân giấy champagne & cành thông, hoa tú cầu, hoa cà phê Đà Lạt phác họa tinh tế */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/gallery-bg.jpg"
          alt="Họa tiết thực vật Đà Lạt thanh lịch"
          className="h-full w-full object-cover object-center opacity-70"
        />
        {/* Lớp hòa sắc mềm mại giữ độ sáng nhẹ nhàng ở trung tâm */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF6F0]/30 to-transparent" />
        
        {/* Mờ nhẹ 2 bên sườn (mỏng) hòa tự nhiên với màu nền kem */}
        <div className="absolute inset-y-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-[#FAF6F0] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-[#FAF6F0] to-transparent" />
        
        {/* Dải tan mỏng ở đỉnh đón nền họa tiết Location chuyển sang Gallery cùng màu nền */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-[linear-gradient(to_bottom,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
        
        {/* Dải tan mỏng ở đáy hòa nền họa tiết Gallery vào màu nền kem chuyển tiếp SunsetCta */}
        <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-[linear-gradient(to_top,#FAF6F0_0%,rgba(250,246,240,0.45)_50%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        {/* Tiêu đề Gallery căn giữa chuẩn mockup */}
        <div className="text-center" data-reveal="fade-down">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
            GALLERY
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C221E]">
            Một góc Đà Lạt của Ngọc Sang
          </h2>
        </div>

        {/* Carousel dải 5 ảnh với 2 nút điều hướng trái/phải */}
        <div className="relative mt-8 sm:mt-10">
          {/* Nút lùi (<) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Hình trước"
            className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#3D2E28] text-white shadow-xl transition-all duration-300 hover:bg-[#700c18] hover:scale-110 active:scale-95 border border-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dải 5 hình ảnh căn đều cùng khoảng cách với Tiện Ích */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5 px-6 sm:px-0">
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                data-reveal="scale-up"
                data-reveal-delay={`${(idx + 1) * 100}`}
                className={`group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-md border border-[#ECDCC8] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  idx === 4 ? "col-span-2 max-w-[240px] mx-auto w-full sm:col-span-1 sm:max-w-none" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-3">
                  <span className="text-[11px] font-medium text-white line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Nút tiến (>) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Hình tiếp theo"
            className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#3D2E28] text-white shadow-xl transition-all duration-300 hover:bg-[#700c18] hover:scale-110 active:scale-95 border border-white/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
