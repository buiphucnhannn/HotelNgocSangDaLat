# Ngọc Sang Hotel — Landing Page

Landing page khách sạn dùng **Next.js 16 (App Router) + TailwindCSS v4 + JavaScript thuần**.

## Chạy project

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # kiểm tra build production
npm run lint    # kiểm tra ESLint
```

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.js      # Root layout: font, metadata, Header/Footer
│   ├── page.js        # Ghép các section thành landing page
│   ├── globals.css    # Tailwind v4 + design tokens (@theme)
│   └── robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.js  # "use client": menu mobile, hiệu ứng scroll
│   │   └── Footer.js  # Server Component tĩnh
│   ├── sections/      # T từng khúc landing page
│   │   ├── Hero.js
│   │   ├── BookingBar.js   # "use client": form kiểm tra phòng
│   │   ├── About.js
│   │   ├── Rooms.js
│   │   ├── Amenities.js
│   │   ├── Gallery.js      # "use client": lightbox
│   │   ├── Testimonials.js # "use client": carousel
│   │   └── Contact.js      # "use client": form + bản đồ
│   └── ui/            # Component dùng chung
│       ├── Container.js
│       ├── SectionHeading.js
│       └── Button.js
└── data/
    └── hotel.js       # SỬA NỘI DUNG TẠI ĐÂY: giá phòng, SĐT, tiện ích...
```

## Quy ước

- `page.js` / `layout.js` và các section tĩnh là **Server Component** (mặc định, không thêm `"use client"`).
- Chỉ thêm `"use client"` ở file cần `useState` / `useEffect` / sự kiện trình duyệt: `Header`, `BookingBar`, `Gallery`, `Testimonials`, `Contact`.
- Muốn đổi nội dung: sửa `src/data/hotel.js`, không cần đụng vào component.
- Muốn đổi màu thương hiệu: sửa block `@theme` trong `src/app/globals.css`.
- Ảnh thật: bỏ vào `public/images/` rồi dùng `next/image` trong `Rooms` / `Gallery`.
