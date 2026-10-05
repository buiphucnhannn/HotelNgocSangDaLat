"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/data/hotel";
import BookingModal from "@/components/ui/BookingModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Xử lý scroll siêu mượt với requestAnimationFrame, loại bỏ hoàn toàn giật lag
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 35;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver phát hiện section đang xem nhẹ nhàng, không gây layout thrashing
  useEffect(() => {
    const sectionIds = ["home", "about", "rooms", "amenities", "experience", "location"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 h-[68px] sm:h-[80px] flex items-center transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm shadow-black/5"
            : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 sm:px-10 lg:px-16">
          {/* Logo thương hiệu: Huy hiệu tròn viền vàng kim đồng nhất, không bị vỡ hay viền vuông khi cuộn */}
          <Link href="#home" className="group flex items-center gap-2.5 sm:gap-3">
            <div
              className={`relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-300 group-hover:scale-105 shadow-md ${
                scrolled
                  ? "border-[#C5A059] bg-[#160E0B]"
                  : "border-amber-300/80 bg-[#160E0B]"
              }`}
            >
              <img
                src="/images/logo.jpg"
                alt="Ngọc Sang Hotel Logo"
                className="h-full w-full object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-base sm:text-lg font-bold tracking-widest transition-colors duration-300 ${
                  scrolled
                    ? "text-[#2C221E] group-hover:text-[#700c18]"
                    : "text-white drop-shadow-md group-hover:text-amber-200"
                }`}
              >
                NGỌC SANG HOTEL
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                  scrolled ? "text-[#7A6A61]" : "text-amber-200/90 drop-shadow"
                }`}
              >
                ĐÀ LẠT • VIỆT NAM
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) - Sạch sẽ tuyệt đối, không có lằn gạch gạch chân */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => {
              const isActive =
                activeHash === item.href || (item.href === "#home" && activeHash === "#home");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[14px] transition-colors duration-300 py-1 ${
                    scrolled
                      ? isActive
                        ? "font-bold text-[#700c18]"
                        : "font-medium text-[#554740] hover:text-[#700c18]"
                      : isActive
                        ? "font-bold text-[#F2CE8D] drop-shadow-md"
                        : "font-medium text-white/90 hover:text-white drop-shadow-sm"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="relative inline-flex items-center justify-center gap-2 rounded-full bg-[#700c18] px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#861320] hover:shadow-xl hover:scale-105 active:scale-95 border border-white/10"
            >
              Đặt phòng ngay
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl p-2 transition shadow-sm border ${
              scrolled
                ? "bg-white/90 text-[#2C221E] border-[#ECDCC8]"
                : "bg-black/30 text-white border-white/20 backdrop-blur-md"
            } lg:hidden`}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown & backdrop */}
        {open && (
          <>
            {/* Backdrop overlay mờ nhẹ đóng menu khi click ra ngoài */}
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[68px] sm:top-[80px] z-30 bg-black/40 backdrop-blur-sm lg:hidden animate-fade-in"
            />

            {/* Khung menu dropdown trắng ngà sang trọng */}
            <div className="absolute top-full inset-x-0 z-40 border-b border-[#ECDCC8] bg-[#FFFDF9]/98 backdrop-blur-xl px-5 py-4 shadow-2xl lg:hidden animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navLinks.map((item) => {
                  const isActive = activeHash === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all ${
                        isActive
                          ? "bg-[#700c18] text-white font-semibold shadow-md shadow-[#700c18]/20"
                          : "text-[#42332C] font-medium hover:bg-[#F3ECE0] active:scale-[0.98]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      )}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-[#700c18] py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-xl shadow-[#700c18]/30 hover:bg-[#861320] active:scale-[0.98]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9" />
                    </svg>
                    Đặt phòng ngay • {site.phone}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
