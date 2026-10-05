"use client";

import { useEffect } from "react";

/**
 * Cuộn chậm rãi, mượt mà chuẩn phong cách khách sạn cao cấp
 * và tự động xóa dấu # trên thanh URL
 */
export function smoothScrollTo(targetId) {
  if (typeof window === "undefined") return;
  const id = targetId.replace(/^#/, "");

  // Tự động xóa sạch dấu # trên thanh địa chỉ URL
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", window.location.pathname);
  }

  // Nếu là đỉnh trang (#home hoặc rỗng)
  if (id === "home" || !id) {
    customSmoothScroll(0, 850);
    return;
  }

  const targetEl = document.getElementById(id);
  if (!targetEl) return;

  // Tính toán vị trí đẹp nhất để xem section:
  // Trừ chiều cao header (65px trên mobile, 75px trên desktop)
  // và tạo khoảng thở thị giác lý tưởng
  const isMobile = window.innerWidth < 768;
  const headerOffset = isMobile ? 68 : 80;
  const elementPosition = targetEl.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  customSmoothScroll(Math.max(0, offsetPosition), 850);
}

/**
 * Thuật toán cuộn mượt bằng requestAnimationFrame với đường cong easeInOutCubic
 */
function customSmoothScroll(targetY, duration = 850) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;

  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

export default function ScrollObserver() {
  useEffect(() => {
    // 1. Tự động xóa dấu # nếu người dùng load trang có sẵn hash trên URL
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 2. Lắng nghe toàn bộ click vào anchor link # (kể cả Header, Footer, Hero button...)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        smoothScrollTo(href);
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // 3. Intersection Observer cho hiệu ứng xuất hiện khi cuộn
    const initObserver = () => {
      const elements = document.querySelectorAll("[data-reveal]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            } else {
              // Khi cuộn ra khỏi tầm nhìn, gỡ class để khi lướt ngược lại
              // hiệu ứng sẽ tiếp tục xuất hiện lại mượt mà
              entry.target.classList.remove("revealed");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -25px 0px",
        }
      );

      elements.forEach((el) => {
        el.setAttribute("data-observed", "true");
        observer.observe(el);
      });
      return observer;
    };

    const observer = initObserver();

    // Lắng nghe thêm nếu DOM có thay đổi để quan sát các phần tử mới
    const mutationObserver = new MutationObserver(() => {
      const elements = document.querySelectorAll("[data-reveal]:not([data-observed])");
      elements.forEach((el) => {
        el.setAttribute("data-observed", "true");
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
