"use client";

import { useState, useEffect } from "react";
import { site } from "@/data/hotel";

export default function BookingModal({ isOpen, onClose, selectedRoomName = "Phòng Deluxe Double (1 giường đôi)" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: selectedRoomName,
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Khóa cuộn trang bên ngoài khi modal đang mở, đồng thời ẩn thanh trượt ngoài
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fade-in overflow-hidden"
    >
      {/* Container form đặt phòng: Cho phép click ra ngoài để tắt, kích thước vừa vặn cân đối */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[660px] max-h-[96svh] overflow-hidden rounded-3xl bg-[#FFFDF9] border border-[#ECDCC8] shadow-2xl shadow-black/50 transition-all flex flex-col"
      >
        {/* Nút đóng (X) ở góc phải trên */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Đóng form"
          className="absolute top-3 right-3 sm:top-4.5 sm:right-4.5 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35 hover:scale-105 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header modal: Gọn gàng thanh lịch trên mobile, sang trọng trên desktop */}
        <div className="relative bg-[#700c18] px-4 py-3 sm:px-8 sm:py-5 text-center text-white shrink-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/25" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo và Tên thương hiệu */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1.5">
              <div className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-amber-300/70 bg-[#160E0B] shadow-sm">
                <img
                  src="/images/logo.jpg"
                  alt="Ngọc Sang Hotel Logo"
                  className="h-full w-full object-cover scale-105"
                />
              </div>
              <span className="font-display text-[11px] sm:text-sm font-bold tracking-[0.2em] text-[#F3D7A6]">
                NGỌC SANG HOTEL
              </span>
            </div>

            {/* Tiêu đề chính */}
            <h3 className="font-display text-base sm:text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md leading-tight">
              Đặt phòng trực tiếp
            </h3>

            {/* Mô tả phụ */}
            <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-amber-100/90 font-light max-w-md mx-auto leading-tight">
              Hotline 24/7: <b className="font-semibold text-white">{site.phone}</b> • Giữ phòng giá ưu đãi
            </p>
          </div>
        </div>

        {/* Thân Form: Nhỏ gọn, vừa vặn không bị cuộn dài trên mobile */}
        <div className="p-3.5 sm:p-6.5 overflow-y-auto max-h-[calc(94svh-80px)]">
          {isSuccess ? (
            <div className="text-center py-7 sm:py-9">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3.5 shadow-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#700c18]">
                Đã tiếp nhận yêu cầu đặt phòng!
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-[#63544C] max-w-md mx-auto leading-relaxed">
                Cảm ơn quý khách <b className="text-[#2C221E]">{formData.name || "bạn"}</b>. Bộ phận lễ tân của Ngọc Sang Hotel sẽ liên hệ xác nhận qua số điện thoại <b className="text-[#700c18]">{formData.phone}</b> trong vòng 5-10 phút.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-[#861320] transition hover:scale-105"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Gọi hotline ngay
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full border border-[#ECDCC8] bg-white px-6 py-2.5 text-xs sm:text-sm font-medium text-[#63544C] hover:bg-[#F3ECE0] transition"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4">
              {/* Hàng 1: Ngày nhận phòng & Ngày trả phòng (2 cột trên cả mobile và desktop) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Ngày nhận <span className="text-[#700c18]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Ngày trả <span className="text-[#700c18]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25"
                  />
                </div>
              </div>

              {/* Hàng 2: Hạng phòng & Số lượng khách (2 cột) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Hạng phòng
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2 sm:px-3.5 py-1.5 sm:py-2.5 text-[11px] sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25 truncate"
                  >
                    <option value="Phòng Deluxe Double (1 giường đôi)">Deluxe Double (1 giường)</option>
                    <option value="Phòng Superior Twin (2 giường)">Superior Twin (2 giường)</option>
                    <option value="Phòng Family Rộng Rãi">Family (4 - 6 khách)</option>
                    <option value="Phòng Ban Công View Đồi">Ban Công View Đồi</option>
                    <option value="Phòng Couple Lãng Mạn">Couple Lãng Mạn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Số lượng khách
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25"
                  >
                    <option value="1">1 khách</option>
                    <option value="2">2 khách (chuẩn)</option>
                    <option value="3">3 khách</option>
                    <option value="4">4 khách</option>
                    <option value="5+">Đoàn 5+ khách</option>
                  </select>
                </div>
              </div>

              {/* Hàng 3: Họ và tên & Số điện thoại / Zalo (2 cột) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Họ và tên <span className="text-[#700c18]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                    Số điện thoại <span className="text-[#700c18]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25"
                  />
                </div>
              </div>

              {/* Hàng 4: Yêu cầu đặc biệt (tuỳ chọn) */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#63544C] mb-1">
                  Yêu cầu đặc biệt (tuỳ chọn)
                </label>
                <textarea
                  rows="2"
                  placeholder="VD: Nhận phòng sớm, ăn chay, hoa &amp; nến..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-[#D9C7B2] bg-white px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm text-[#2C221E] shadow-sm transition focus:outline-none focus:border-[#700c18] focus:ring-1 focus:ring-[#700c18]/25 resize-y min-h-[46px] sm:min-h-[70px]"
                />
              </div>

              {/* Hàng nút xác nhận & cam kết */}
              <div className="pt-2 sm:pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 border-t border-[#ECDCC8]/80">
                <span className="text-[11px] sm:text-xs text-[#8C7E75] text-center sm:text-left">
                  🔒 Giá ưu đãi trực tiếp, không phụ thu ẩn.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-[#700c18]/25 transition-all duration-300 hover:bg-[#8e1423] hover:shadow-2xl active:scale-95"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Gửi yêu cầu đặt phòng
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
