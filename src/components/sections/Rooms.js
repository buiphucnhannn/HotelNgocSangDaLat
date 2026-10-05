"use client";

import { useState } from "react";
import { roomCategories, roomsData, formatVND } from "@/data/hotel";
import BookingModal from "@/components/ui/BookingModal";

export default function Rooms() {
  const [activeCategory, setActiveCategory] = useState("single");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const currentRoom = roomsData[activeCategory] || roomsData.single;
  const currentImages = currentRoom.gallery || [currentRoom.mainImage];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSelectedImageIndex(0);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="rooms" className="relative overflow-hidden bg-[#FAF6F0] pt-12 sm:pt-16 pb-12 sm:pb-16">
      {/* Nền Minimalist Mỹ thuật: vân giấy champagne & hoa hồng, hoa trà, cành thông Đà Lạt phác họa tinh tế */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/rooms-bg.jpg"
          alt="Họa tiết hoa hồng và đồi thông Đà Lạt thanh lịch"
          className="h-full w-full object-cover object-center opacity-75"
        />
        {/* Lớp hòa sắc mềm mại giữ độ sáng nhẹ nhàng ở trung tâm */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF6F0]/40 to-transparent" />
        {/* Chỉ fade 2 bên. Top/bottom bỏ để nối liền mạch About & Amenities cùng nền #FAF6F0. */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF6F0] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF6F0] to-transparent" />
        {/* Dải tan mỏng ở đỉnh đón nền họa tiết About chuyển sang Rooms cùng màu nền */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-[linear-gradient(to_bottom,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
        {/* Dải tan mỏng ở đáy hòa nền họa tiết Rooms vào Amenities cùng màu nền */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-[linear-gradient(to_top,#FAF6F0_0%,rgba(250,246,240,0.35)_45%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        {/* Header section: Tiêu đề */}
        <div data-reveal="fade-down" className="border-b border-[#E8DCCF]/90 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            KHÔNG GIAN NGHỈ NGƠI
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C221E]">
            Chọn căn phòng dành cho hành trình của bạn
          </h2>
        </div>

        {/* 5 Tab danh mục phòng với icon theo đúng mockup */}
        <div data-reveal="fade-up" data-reveal-delay="100" className="mt-6 sm:mt-8 -mx-5 px-5 sm:mx-0 sm:px-0 flex items-center gap-2 sm:gap-3.5 overflow-x-auto pb-2 sm:pb-3 scrollbar-none">
          {roomCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-xl px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#700c18] text-white shadow-xl shadow-[#700c18]/25 scale-[1.02]"
                    : "bg-[#F3ECE0] text-[#63544C] hover:bg-[#EBDDCF] hover:text-[#2C221E] shadow-sm"
                }`}
              >
                {/* Icon tương ứng */}
                {cat.id === "single" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
                  </svg>
                )}
                {cat.id === "twin" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="9" height="13" rx="1" />
                    <rect x="13" y="7" width="9" height="13" rx="1" />
                  </svg>
                )}
                {cat.id === "family" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                )}
                {cat.id === "balcony" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                )}
                {cat.id === "couple" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Khung Showcase Chi Tiết Phòng: Scale rộng, sang trọng, cân đối với section Về Chúng Tôi */}
        <div data-reveal="scale-up" data-reveal-delay="200" className="mt-6 sm:mt-8 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-14 rounded-2xl sm:rounded-3xl bg-white p-4.5 sm:p-10 lg:p-12 shadow-2xl shadow-black/5 border border-[#E8DCCF]">
          {/* Cột trái: Ảnh lớn + Carousel Navigation + Dải 6 ảnh nhỏ bên dưới */}
          <div className="lg:col-span-7">
            {/* Ảnh lớn chính */}
            <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 shadow-md">
              <img
                src={currentImages[selectedImageIndex] || currentRoom.mainImage}
                alt={currentRoom.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Nút lùi ảnh (<) */}
              <button
                type="button"
                onClick={handlePrevImage}
                aria-label="Ảnh trước"
                className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-[#2C221E] shadow-xl transition-all hover:scale-110 hover:bg-white active:scale-95 border border-[#E8DCCF]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Nút tiến ảnh (>) */}
              <button
                type="button"
                onClick={handleNextImage}
                aria-label="Ảnh kế tiếp"
                className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-[#2C221E] shadow-xl transition-all hover:scale-110 hover:bg-white active:scale-95 border border-[#E8DCCF]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Dải 6 thumbnail nhỏ ngay bên dưới ảnh lớn */}
            <div className="mt-3 sm:mt-4 grid grid-cols-6 gap-1.5 sm:gap-3.5">
              {currentImages.slice(0, 6).map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl transition-all ${
                    selectedImageIndex === idx
                      ? "ring-2 ring-[#700c18] scale-105 opacity-100 shadow-md"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Góc nhìn ${idx + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Cột phải: Thông số, Giá & Nút Đặt phòng */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              {/* Badge */}
              <span className="inline-block rounded-md bg-[#FAF4EB] border border-amber-300/60 px-3.5 py-1 text-xs font-semibold text-[#936f11]">
                {currentRoom.badge}
              </span>

              {/* Tên phòng */}
              <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#2C221E] leading-tight">
                {currentRoom.name}
              </h3>

              {/* Thông số đặc trưng */}
              <div className="mt-6 grid grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#4A3D36]">
                {currentRoom.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FAF4EB] text-[#700c18] border border-[#E8DCCF]">
                      {feat.icon === "bed" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
                        </svg>
                      )}
                      {feat.icon === "users" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                      )}
                      {feat.icon === "balcony" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                        </svg>
                      )}
                      {feat.icon === "wifi" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
                        </svg>
                      )}
                    </span>
                    <span className="font-medium leading-snug">{feat.text}</span>
                  </div>
                ))}
              </div>

              {/* Mô tả cảm xúc */}
              <p className="mt-6 text-xs sm:text-sm leading-relaxed text-[#5C4D45]">
                {currentRoom.tagline}
              </p>
            </div>

            {/* Khối giá & CTA button */}
            <div className="mt-8 border-t border-[#E8DCCF]/90 pt-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xs sm:text-sm text-[#8C7E75]">Từ</span>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#700c18]">
                  {formatVND(currentRoom.price)}
                </span>
                <span className="text-xs sm:text-sm text-[#8C7E75]">{currentRoom.priceNote}</span>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full rounded-full bg-[#700c18] py-3.5 sm:py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#861320] hover:shadow-xl active:scale-[0.99]"
              >
                Đặt phòng ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedRoomName={currentRoom.name}
      />
    </section>
  );
}
