// Hoa văn nét vẽ thanh lịch trang trí các góc section như mẫu
export default function FloralDecor({ position = "right", className = "" }) {
  const isRight = position === "right";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none opacity-25 transition-opacity duration-700 ${
        isRight ? "right-0 top-0" : "left-0 top-0"
      } ${className}`}
    >
      <svg
        width="220"
        height="260"
        viewBox="0 0 220 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-auto w-40 sm:w-56 ${isRight ? "" : "scale-x-[-1]"}`}
      >
        <path
          d="M190 20C170 45 150 70 120 85C90 100 50 105 20 120"
          stroke="#C5A059"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M140 65C130 50 115 45 100 50C85 55 80 70 90 85C100 100 120 95 130 85C140 75 145 60 140 65Z"
          stroke="#C5A059"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M175 40C165 30 150 28 140 35C130 42 132 55 142 62C152 69 168 62 172 52"
          stroke="#C5A059"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M95 100C75 110 65 125 70 140C75 155 90 160 105 150C120 140 120 120 105 110"
          stroke="#C5A059"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M60 135C45 145 35 160 40 175C45 190 60 195 75 185C90 175 90 155 75 145"
          stroke="#C5A059"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          fill="none"
        />
        <circle cx="110" cy="70" r="4" fill="#C5A059" opacity="0.5" />
        <circle cx="85" cy="130" r="3" fill="#C5A059" opacity="0.4" />
      </svg>
    </div>
  );
}
