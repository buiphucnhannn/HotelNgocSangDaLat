"use client";

import { amenitiesList } from "@/data/hotel";

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-[#FAF6F0] pt-12 sm:pt-16 pb-12 sm:pb-16">
      {/* Background Grand Lobby: Sảnh đón khách tân cổ điển sang trọng, đèn chùm pha lê & hoa tươi lộng lẫy */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/amenities-grand-lobby.jpg"
          alt="Không gian sảnh đón tiếp sang trọng Ngọc Sang Hotel Đà Lạt"
          className="h-full w-full object-cover object-right sm:object-center"
        />
        {/* Lớp hòa sắc chuyển tiếp mềm mại từ trái sang phải để nổi bật tiêu đề và 5 thẻ tiện ích */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent sm:from-[#FAF6F0]/95 sm:via-[#FAF6F0]/75 lg:to-transparent" />
        {/* Không fade đáy ở section sáng này — để Experience (section tối kế tiếp)
            tự lo fade đỉnh bằng gradient cao, tránh 2 lớp fade chồng nhau gây vệt. */}
        {/* Dải tan mỏng ở đỉnh đón nền họa tiết Rooms chuyển sang Amenities cùng màu nền */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-[linear-gradient(to_bottom,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        {/* Tiêu đề mục Tiện ích */}
        <div data-reveal="fade-left" className="max-w-2xl text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            TIỆN ÍCH & DỊCH VỤ
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#2C221E] leading-[1.2]">
            Đầy đủ tiện nghi
            <br className="hidden sm:inline" />
            {" "}cho kỳ nghỉ trọn vẹn
          </h2>
        </div>

        {/* Hàng 5 huy hiệu icon tròn theo đúng mẫu chuẩn với hiệu ứng trồi lên so le */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {amenitiesList.map((item, idx) => (
            <div
              key={idx}
              data-reveal="fade-up"
              data-reveal-delay={`${(idx + 1) * 100}`}
              className={`group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-[#E8DCCF] shadow-lg shadow-black/5 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-amber-300/60 hover:-translate-y-1.5 ${
                idx === 4 ? "col-span-2 max-w-[240px] mx-auto w-full sm:col-span-1 sm:max-w-none" : ""
              }`}
            >
              {/* Vòng tròn icon phong cách hoàng gia */}
              <div className="relative flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#FAF4EB] border-2 border-amber-300/50 text-[#700c18] shadow-inner transition-transform duration-300 group-hover:scale-110">
                {idx === 0 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                {idx === 4 && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
                  </svg>
                )}
              </div>

              {/* Tên tiện ích */}
              <h3 className="mt-4 text-xs sm:text-sm font-bold text-[#2C221E] leading-snug group-hover:text-[#700c18] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
