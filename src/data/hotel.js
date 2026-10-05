// Nguồn dữ liệu chính xác theo nhận diện Ngọc Sang Hotel - Đà Lạt
export const site = {
  name: "Ngọc Sang Hotel",
  shortName: "Ngọc Sang",
  tagline: "Một chốn nghỉ ấm áp giữa lòng Đà Lạt",
  description:
    "Ngọc Sang Hotel mang đến không gian nghỉ ngơi sạch sẽ, tiện nghi và ấm áp, phù hợp cho những chuyến đi cùng gia đình, bạn bè, người thương hay những hành trình khám phá Đà Lạt.",
  phone: "0796 792 222",
  phoneHref: "tel:0796792222",
  zaloHref: "https://zalo.me/0796792222",
  messengerHref: "https://m.me/ngocsanghotel",
  facebookHref: "https://facebook.com",
  email: "ngocsanghoteldalat@gmail.com",
  address: "20 Đường 3/2, Phường 1, TP. Đà Lạt",
  mapUrl: "https://maps.google.com/?q=Ngọc+Sang+Hotel+20+Đường+3/2+Phường+1+Đà+Lạt",
  checkin: "14:00",
  checkout: "12:00",
  rating: "4.9",
  reviewsCount: "850+",
};

export const navLinks = [
  { label: "Trang chủ", href: "#home" },
  { label: "Phòng nghỉ", href: "#rooms" },
  { label: "Tiện ích", href: "#amenities" },
  { label: "Trải nghiệm", href: "#experience" },
  { label: "Vị trí", href: "#location" },
];

export const roomCategories = [
  { id: "single", label: "Phòng 1 giường", icon: "bed" },
  { id: "twin", label: "Phòng 2 giường", icon: "twin" },
  { id: "family", label: "Phòng gia đình", icon: "family" },
  { id: "balcony", label: "Phòng có ban công", icon: "balcony" },
  { id: "couple", label: "Phòng couple", icon: "couple" },
];

export const roomsData = {
  single: {
    id: "deluxe-double",
    name: "Phòng Deluxe Double",
    badge: "Phổ biến",
    tagline: "Không gian ấm áp, tiện nghi, phù hợp cho cặp đôi hoặc khách du lịch tự túc.",
    price: 450000,
    priceNote: "/ đêm",
    features: [
      { icon: "bed", text: "1 giường đôi lớn" },
      { icon: "users", text: "Tối đa 2 khách" },
      { icon: "balcony", text: "Ban công thoáng mát" },
      { icon: "wifi", text: "WiFi & Smart TV" },
    ],
    mainImage: "/images/room-deluxe-double.jpg",
    gallery: [
      "/images/room-deluxe-double.jpg",
      "/images/room-balcony.jpg",
      "/images/room-twin.jpg",
      "/images/room-double-wood.jpg",
      "/images/room-attic.jpg",
      "/images/room-bathroom.jpg",
    ],
  },
  twin: {
    id: "superior-twin",
    name: "Phòng Superior Twin",
    badge: "Tiện lợi",
    tagline: "2 giường riêng biệt rộng rãi, sàn gỗ cao cấp, thích hợp cho bạn bè hoặc đồng nghiệp.",
    price: 650000,
    priceNote: "/ đêm",
    features: [
      { icon: "bed", text: "2 giường đơn riêng" },
      { icon: "users", text: "2 đến 3 khách" },
      { icon: "balcony", text: "Cửa sổ thoáng sáng" },
      { icon: "wifi", text: "WiFi & Smart TV" },
    ],
    mainImage: "/images/room-twin.jpg",
    gallery: [
      "/images/room-twin.jpg",
      "/images/room-family.jpg",
      "/images/room-balcony.jpg",
      "/images/room-deluxe-double.jpg",
      "/images/room-attic.jpg",
      "/images/room-bathroom.jpg",
    ],
  },
  family: {
    id: "family-suite",
    name: "Phòng Family Rộng Rãi",
    badge: "Gia đình",
    tagline: "Không gian sinh hoạt rộng rãi với nhiều giường lớn, ngập tràn ánh sáng tự nhiên.",
    price: 850000,
    priceNote: "/ đêm",
    features: [
      { icon: "bed", text: "2 - 3 giường lớn" },
      { icon: "users", text: "4 đến 6 khách" },
      { icon: "balcony", text: "Cửa sổ ngắm đồi" },
      { icon: "wifi", text: "Tiện nghi đầy đủ" },
    ],
    mainImage: "/images/room-family.jpg",
    gallery: [
      "/images/room-family.jpg",
      "/images/room-family-3bed.jpg",
      "/images/room-balcony.jpg",
      "/images/room-twin.jpg",
      "/images/room-deluxe-double.jpg",
      "/images/room-bathroom.jpg",
    ],
  },
  balcony: {
    id: "deluxe-balcony",
    name: "Phòng Ban Công View Đồi",
    badge: "View đẹp",
    tagline: "Ban công riêng nhìn ra thành phố và đồi thông mờ sương, đón bình minh Đà Lạt trọn vẹn.",
    price: 550000,
    priceNote: "/ đêm",
    features: [
      { icon: "bed", text: "1 giường Queen lớn" },
      { icon: "users", text: "Tối đa 2 khách" },
      { icon: "balcony", text: "Ban công view đồi" },
      { icon: "wifi", text: "Bàn trà & WiFi" },
    ],
    mainImage: "/images/room-balcony.jpg",
    gallery: [
      "/images/room-balcony.jpg",
      "/images/room-arched.jpg",
      "/images/room-balcony-swan.jpg",
      "/images/room-deluxe-double.jpg",
      "/images/room-attic.jpg",
      "/images/room-bathroom.jpg",
    ],
  },
  couple: {
    id: "romantic-couple",
    name: "Phòng Couple Lãng Mạn",
    badge: "Cặp đôi",
    tagline: "Thiết kế ấm áp với gỗ thông Đà Lạt, trang trí hoa hồng và thiên nga theo yêu cầu.",
    price: 500000,
    priceNote: "/ đêm",
    features: [
      { icon: "bed", text: "1 giường King êm ái" },
      { icon: "users", text: "Dành cho 2 khách" },
      { icon: "balcony", text: "Góc ngắm cảnh chill" },
      { icon: "wifi", text: "Decor lãng mạn" },
    ],
    mainImage: "/images/room-couple.jpg",
    gallery: [
      "/images/room-couple.jpg",
      "/images/room-balcony-swan.jpg",
      "/images/room-deluxe-double.jpg",
      "/images/room-balcony.jpg",
      "/images/room-attic.jpg",
      "/images/room-bathroom.jpg",
    ],
  },
};

export const amenitiesList = [
  {
    title: "Phòng sạch sẽ tiện nghi",
    desc: "Đầy đủ khăn, đồ vệ sinh cá nhân, máy sấy, bình siêu tốc",
    icon: "sparkles",
  },
  {
    title: "Hỗ trợ đặt phòng nhanh chóng",
    desc: "Xác nhận ngay qua Hotline & Zalo 24/7",
    icon: "calendar",
  },
  {
    title: "Tư vấn du lịch Đà Lạt",
    desc: "Gợi ý điểm check-in, thuê xe máy và lịch trình miễn phí",
    icon: "compass",
  },
  {
    title: "Khu vực lễ tân thân thiện",
    desc: "Lễ tân hỗ trợ 24/24, giữ hành lý trước nhận phòng",
    icon: "desk",
  },
  {
    title: "WiFi miễn phí toàn khách sạn",
    desc: "Đường truyền cáp quang tốc độ cao từng tầng",
    icon: "wifi",
  },
];

export const dalatExperiences = [
  {
    title: "Cà phê",
    subtitle: "Những góc nhỏ để bắt đầu buổi sáng",
    image: "/images/card-coffee-sharp.jpg",
  },
  {
    title: "Khám phá",
    subtitle: "Những địa điểm không nên bỏ lỡ",
    image: "/images/card-church-sharp.jpg",
  },
  {
    title: "Ẩm thực",
    subtitle: "Hương vị đặc trưng của thành phố sương",
    image: "/images/card-food-sharp.jpg",
  },
];

export const galleryList = [
  { title: "Sảnh lễ tân sang trọng", image: "/images/reception.jpg" },
  { title: "Phòng ban công view đồi", image: "/images/room-balcony.jpg" },
  { title: "Phòng Deluxe ấm cúng", image: "/images/room-deluxe-double.jpg" },
  { title: "Phòng 2 giường tiêu chuẩn", image: "/images/room-twin.jpg" },
  { title: "Phòng tắm kính tiện nghi", image: "/images/room-bathroom.jpg" },
  { title: "Phòng gác mái ấm áp", image: "/images/room-attic.jpg" },
  { title: "Ngoại thất khách sạn về đêm", image: "/images/hotel-night.jpg" },
];

export function formatVND(value) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}
