"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

// Thanh đặt phòng nhanh (demo frontend, chưa nối backend).
// Là Client Component vì dùng state của form.
export default function BookingBar() {
  const [form, setForm] = useState({ checkin: "", checkout: "", guests: "2" });
  const [message, setMessage] = useState("");

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.checkin || !form.checkout) {
      setMessage("Vui lòng chọn ngày nhận và trả phòng.");
      return;
    }
    setMessage(
      `Đã nhận yêu cầu: ${form.guests} khách, từ ${form.checkin} đến ${form.checkout}. Lễ tân sẽ gọi xác nhận trong 15 phút.`
    );
  }

  return (
    <section aria-label="Đặt phòng nhanh" className="relative z-10 bg-white">
      <Container className="-mt-8">
        <form
          onSubmit={onSubmit}
          className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-navy-950/10 sm:p-5 md:grid-cols-[1fr_1fr_1fr_auto]"
        >
          <label className="block rounded-xl bg-slate-50 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Nhận phòng
            </span>
            <input
              type="date"
              value={form.checkin}
              onChange={(e) => update("checkin", e.target.value)}
              className="mt-1 w-full bg-transparent text-sm font-medium text-navy-900 focus:outline-none"
            />
          </label>
          <label className="block rounded-xl bg-slate-50 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Trả phòng
            </span>
            <input
              type="date"
              value={form.checkout}
              onChange={(e) => update("checkout", e.target.value)}
              className="mt-1 w-full bg-transparent text-sm font-medium text-navy-900 focus:outline-none"
            />
          </label>
          <label className="block rounded-xl bg-slate-50 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Số khách
            </span>
            <select
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className="mt-1 w-full bg-transparent text-sm font-medium text-navy-900 focus:outline-none"
            >
              <option value="1">1 khách</option>
              <option value="2">2 khách</option>
              <option value="3">3 khách</option>
              <option value="4">4 khách trở lên</option>
            </select>
          </label>
          <button
            type="submit"
            className="rounded-xl bg-navy-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Kiểm tra phòng trống
          </button>
        </form>
        {message ? (
          <p className="mt-3 rounded-xl bg-brand-50 px-4 py-3 text-sm text-navy-900">
            {message}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
