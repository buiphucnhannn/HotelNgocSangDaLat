"use client";

import { useState } from "react";
import { site } from "@/data/hotel";
import BookingModal from "@/components/ui/BookingModal";

export default function SunsetCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#2D1B12] flex flex-col justify-center pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 min-h-[420px] sm:min-h-[460px] lg:min-h-[calc(100svh-175px)]">
        {/* Background Sunset Panorama 8K Đà Lạt - Không chứa chữ thừa, hiển thị tràn 100% */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="/images/dalat-sunset-clean.jpg"
            alt="Khung cảnh hoàng hôn đồi thông và hồ nước Đà Lạt tuyệt đẹp"
            className="h-full w-full object-cover object-center scale-100"
          />
          {/* Lớp phủ đa tầng: Đảm bảo độ sâu màu hoàng hôn và độ nổi bật tối đa của chữ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
          <div className="absolute inset-0 bg-[#3A1E11]/30 mix-blend-multiply" />

          {/* Fade đỉnh cao + mượt tiếp giáp Gallery cùng tông sáng #FAF6F0 */}
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-[linear-gradient(to_bottom,#FAF6F0_0%,rgba(250,246,240,0.6)_38%,rgba(250,246,240,0.18)_68%,transparent_100%)]" />
        </div>

        {/* Nội dung căn giữa hoàn hảo, xích nhẹ xuống dưới một ít */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-5 sm:px-10 lg:px-16 pt-12 sm:pt-14 pb-2 sm:pb-3 text-center text-white">
          <div data-reveal="fade-up" className="max-w-3xl w-full mx-auto flex flex-col items-center translate-y-2 sm:translate-y-3 md:translate-y-3.5">
            {/* Nhãn chữ thuần túy, thanh lịch, không cần badge đóng khung */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#F3D7A6] drop-shadow-md mb-2 sm:mb-2.5">
              KHỞI ĐẦU KỲ NGHỈ ĐÁNG NHỚ TẠI ĐÀ LẠT
            </p>

            {/* Tiêu đề chính sắc nét, cân đối vừa vặn 1 màn hình */}
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-wide uppercase text-white drop-shadow-xl leading-tight">
              Sẵn sàng cho chuyến đi Đà Lạt?
            </h2>

            {/* Mô tả phụ ấm áp */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#FFF3E5]/95 font-normal max-w-xl mx-auto drop-shadow-md leading-relaxed">
              Chọn căn phòng phù hợp tại không gian ấm cúng, ngay trung tâm Phường 1 và bắt đầu hành trình của bạn cùng Ngọc Sang Hotel.
            </p>

            {/* Cụm nút chuyển đổi kép (Đặt phòng ngay + Hotline) */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-black/50 transition-all duration-300 hover:bg-[#8e1423] hover:shadow-black/70 hover:-translate-y-0.5 active:translate-y-0 border border-white/10"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
                </svg>
                Đặt phòng ngay
              </button>

              <a
                href={site.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Hotline: {site.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Fade đáy mượt sang Footer nâu đậm #160E0B — thay sóng gắt bằng gradient nhiều điểm dừng */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full">
          <div className="h-24 sm:h-32 w-full bg-[linear-gradient(to_top,#160E0B_0%,rgba(22,14,11,0.6)_38%,rgba(22,14,11,0.18)_68%,transparent_100%)]" />
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
