"use client";

import { dalatExperiences } from "@/data/hotel";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-[#131E2A] py-14 sm:py-24"
    >
      {/* Background Banner: Hồ Xuân Hương & thành phố Đà Lạt lung linh về đêm (ảnh mới gen 8K siêu sắc nét, không có chữ thừa) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/dalat-lake-clean.jpg"
          alt="Hồ Xuân Hương và thành phố Đà Lạt lung linh về đêm"
          className="h-full w-full object-cover object-center"
        />
        {/* Lớp phủ dọc trên mobile đảm bảo chữ và thẻ card luôn sắc nét */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/80 sm:hidden" />
        
        {/* Lớp phủ gradient nhẹ ngang trên desktop */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent sm:from-black/70 sm:via-black/35" />

        {/* Làm mờ 2 bên sườn nền nhẹ nhàng vừa vặn */}
        <div className="absolute inset-y-0 left-0 w-4 sm:w-8 bg-gradient-to-r from-black/30 to-transparent z-[2]" />
        <div className="absolute inset-y-0 right-0 w-4 sm:w-8 bg-gradient-to-l from-black/30 to-transparent z-[2]" />
        {/* Chuyển sắc mỏng nhẹ chỉ ở mép rìa (h-8 sm:h-12), không che khuất cảnh hồ */}
        <div className="absolute inset-x-0 top-0 h-8 sm:h-12 bg-gradient-to-b from-[#FAF6F0] to-transparent z-[2]" />
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF6F0] to-transparent z-[2]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Cột trái: Tiêu đề & Lời mời gọi du lịch */}
          <div data-reveal="fade-right" className="lg:col-span-5 text-left text-white max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E5C795]">
              TRẢI NGHIỆM ĐÀ LẠT
            </p>

            <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-white drop-shadow-md">
              Đà Lạt
              <br />
              đang chờ bạn
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-[#F3EFEA]/95 drop-shadow">
              Khám phá những điểm đến nổi bật, ẩm thực và kinh nghiệm du lịch cùng Ngọc Sang Hotel.
            </p>
          </div>

          {/* Cột phải: 3 Thẻ Card nổi bật (Cà phê, Khám phá, Ẩm thực) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {dalatExperiences.map((card, idx) => (
                <div
                  key={idx}
                  data-reveal="pop-in"
                  data-reveal-delay={`${(idx + 1) * 150}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 border border-white/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Ảnh card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Nội dung card */}
                  <div className="p-4 sm:p-5 text-left">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#2C221E] group-hover:text-[#700c18] transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#5C4D45]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
