import { Be_Vietnam_Pro, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollObserver from "@/components/ui/ScrollObserver";
import "./globals.css";

const sans = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ngocsanghotel.vn"),
  title: "Ngọc Sang Hotel | Một chốn nghỉ ấm áp giữa lòng Đà Lạt",
  description:
    "Ngọc Sang Hotel tại 20 Đường 3/2, Phường 1, TP. Đà Lạt — Phòng sạch sẽ, tiện nghi, ấm áp, vị trí trung tâm gần chợ Đà Lạt & Hồ Xuân Hương. Đặt phòng nhận ưu đãi giá tốt nhất.",
  keywords: [
    "khách sạn Đà Lạt",
    "Ngọc Sang Hotel",
    "khách sạn trung tâm Đà Lạt",
    "đặt phòng Đà Lạt",
    "khách sạn đường 3/2 Đà Lạt",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Ngọc Sang Hotel",
    title: "Ngọc Sang Hotel — Một chốn nghỉ ấm áp giữa lòng Đà Lạt",
    description:
      "Không gian nghỉ ngơi ấm áp, tiện nghi, vị trí trung tâm Đà Lạt. Đặt phòng ngay để có kỳ nghỉ trọn vẹn.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${sans.variable} ${display.variable} ${script.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#FDFBF7] font-sans text-[#2C221E] antialiased selection:bg-[#700c18] selection:text-white">
        <ScrollObserver />
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
