// Divider dạng sóng uốn lượn mềm mại giữa các section theo đúng phong cách mẫu
export default function WaveDivider({
  position = "bottom", // "top" | "bottom"
  color = "#FDFBF7",   // màu của section tiếp giáp
  accentColor = "rgba(197, 155, 39, 0.18)", // viền vàng kim lấp lánh
  className = "",
  flip = false,
}) {
  const isTop = position === "top";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-10 w-full overflow-hidden leading-none ${
        isTop ? "top-0 -translate-y-[99%]" : "bottom-0 translate-y-[99%]"
      } ${className}`}
      style={{ transform: `${isTop ? "translateY(1px)" : "translateY(-1px)"} ${flip ? "scaleX(-1)" : ""}` }}
    >
      <svg
        viewBox="0 0 1440 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-[45px] w-full sm:h-[65px] lg:h-[85px]"
      >
        {/* Lớp viền sóng ánh kim ấm áp */}
        <path
          d="M0,35 C240,65 480,20 720,50 C960,80 1200,30 1440,60 L1440,85 L0,85 Z"
          fill={accentColor}
          opacity="0.6"
        />
        {/* Lớp sóng chính ăn khớp vào màu nền */}
        <path
          d="M0,45 C280,15 540,75 820,35 C1100,-5 1300,55 1440,40 L1440,85 L0,85 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
