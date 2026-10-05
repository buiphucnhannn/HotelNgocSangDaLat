"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/hotel";

// Form liên hệ demo (chưa có backend) → Client Component.
export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <SectionHeading
        eyebrow="Liên hệ & đặt phòng"
        title="Đặt phòng trong 1 phút"
        description="Để lại thông tin, lễ tân gọi xác nhận trong 15 phút (7:00 – 23:00). Hoặc gọi hotline để giữ phòng gấp."
      />
      <Container className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-navy-950 p-8 text-white sm:p-10">
          <p className="text-sm uppercase tracking-widest text-brand-400">Hotline 24/7</p>
          <a href={site.phoneHref} className="mt-2 block font-display text-4xl font-bold">
            {site.phone}
          </a>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li>Địa chỉ: {site.address}</li>
            <li>Email: {site.email}</li>
            <li>Nhận phòng {site.checkin} — Trả phòng {site.checkout}</li>
          </ul>
          <div className="mt-6 overflow-hidden rounded-xl">
            <iframe
              title="Bản đồ Ngọc Sang Hotel"
              src="https://www.google.com/maps?q=Nha+Trang&output=embed"
              loading="lazy"
              className="h-56 w-full border-0"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-8 sm:p-10">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-bold text-navy-900">
                Đã nhận yêu cầu đặt phòng
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Cảm ơn bạn! Lễ tân sẽ liên hệ xác nhận trong 15 phút làm việc.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Họ tên *</span>
                  <input required placeholder="Nguyễn Văn A" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Số điện thoại *</span>
                  <input required placeholder="09xx xxx xxx" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Nhận phòng</span>
                  <input type="date" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Trả phòng</span>
                  <input type="date" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Ghi chú</span>
                <textarea rows={4} placeholder="VD: phòng tầng cao, 2 giường đơn, đón sân bay..." className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
              </label>
              <button type="submit" className="w-full rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400">
                Gửi yêu cầu đặt phòng
              </button>
              <p className="text-center text-xs text-slate-500">
                Miễn phí hủy trước 48 giờ · Không cần cọc với booking dưới 2 đêm
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
