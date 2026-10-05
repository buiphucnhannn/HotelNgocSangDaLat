"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BookingModal from "@/components/ui/BookingModal";

export default function Hero({ onOpenBooking }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Đảm bảo khi vừa tải trang luôn ở vị trí đỉnh (0, 0), hero chiếm trọn 100% viewport
    if (typeof window !== "undefined" && (!window.location.hash || window.location.hash === "#home")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  const handleOpenModal = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] h-[100svh] w-full overflow-hidden bg-[#241712] flex flex-col justify-center select-none"
    >
      {/* Background Image: Ảnh phòng khách sạn Đà Lạt sang trọng tràn ngập 100% toàn bộ màn hình */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/hero-clean-bg.jpg"
          alt="Không gian phòng nghỉ ấm áp tại Ngọc Sang Hotel Đà Lạt"
          className="h-full w-full object-cover object-center scale-100"
        />
        {/* Lớp overlay tối dọc trên mobile giúp tương phản cao nhất */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75 sm:hidden z-[1]" />

        {/* Lớp overlay ngang trên desktop/tablet */}
        <div className="hidden sm:block absolute inset-y-0 left-0 w-full sm:w-[75%] lg:w-[64%] bg-[linear-gradient(to_right,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.65)_45%,rgba(0,0,0,0.3)_70%,transparent_100%)] z-[1]" />
        
        {/* Làm mờ chuyển tiếp 2 bên sườn nền hòa nhẹ nhàng vào khung hình */}
        <div className="absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-black/40 to-transparent z-[2]" />
        <div className="absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-black/40 to-transparent z-[2]" />

        {/* Lớp phủ chuyển sắc trên cùng */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/45 to-transparent z-[1]" />
      </div>

      {/* Main Content: Cụm bên trái xích lên 1 ít (ít thật ít) và giảm size 2 nút bấm vừa vặn, thanh thoát */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 sm:px-12 lg:px-20 pt-16 sm:pt-14">
        <div data-reveal="fade-up" className="max-w-3xl text-left -translate-y-2 sm:-translate-y-5 md:-translate-y-6">
          {/* Nhãn chữ to & rõ */}
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.32em] text-[#F3D7A6] drop-shadow-md mb-2 sm:mb-2.5 [text-shadow:0_1px_10px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,1)]">
            NGỌC SANG HOTEL
          </p>

          {/* Tiêu đề chính to rõ, ấn tượng */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.12] text-white drop-shadow-2xl [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_4px_rgba(0,0,0,0.95)]">
            Một chốn nghỉ ấm áp
            <span className="mt-1.5 sm:mt-2.5 block font-script text-[42px] sm:text-6xl md:text-7xl lg:text-[84px] font-normal text-[#F2CE8D] drop-shadow-xl [text-shadow:0_2px_20px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.95)]">
              giữa lòng Đà Lạt
            </span>
          </h1>

          {/* Dòng mô tả */}
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-base md:text-lg font-normal leading-relaxed text-[#F7F2EC]/95 drop-shadow-md max-w-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,0.95)]">
            Không gian sạch sẽ • Tiện nghi • Thuận tiện di chuyển
            <br />
            Phù hợp cho những chuyến đi cùng gia đình, bạn bè và người thương.
          </p>

          {/* 2 nút Call to Action: Sang trọng gọn gàng bên nhau trên desktop, xếp chồng vừa vặn trên mobile */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5">
            {/* Nút 1: Đặt phòng ngay */}
            <button
              type="button"
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-7 py-3 text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-white shadow-xl shadow-black/50 transition-all duration-300 hover:bg-[#8e1423] hover:shadow-black/70 hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
              </svg>
              Đặt phòng ngay
            </button>

            {/* Nút 2: Khám phá phòng */}
            <Link
              href="#rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-black/35 px-6 py-3 text-xs sm:text-[13px] font-semibold text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-black/50 hover:border-amber-300 hover:text-amber-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Khám phá phòng
            </Link>
          </div>
        </div>
      </div>

      {/* Chuyển tiếp đáy mỏng nhẹ vào About (#FAF6F0): chỉ một đường tan sát mép,
          trong suốt tới 60% rồi mới lên kem mờ để ảnh Hero giữ gần nguyên */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
        <div className="h-10 sm:h-14 w-full bg-[linear-gradient(to_top,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
