"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/hotel";

// Carousel đánh giá → Client Component.
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Đánh giá"
        title="Khách nói gì về Ngọc Sang?"
      />
      <Container className="mt-12 max-w-3xl">
        <figure className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div aria-label={`${item.score} trên 5 sao`} className="text-brand-500">
            {"★".repeat(item.score)}
          </div>
          <blockquote className="mt-4 font-display text-xl leading-relaxed text-navy-900">
            “{item.content}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-navy-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.trip}</p>
          </figcaption>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Đánh giá trước"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-brand-400"
            >
              ← Trước
            </button>
            <span className="text-sm text-slate-500">
              {index + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Đánh giá tiếp"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm hover:border-brand-400"
            >
              Tiếp →
            </button>
          </div>
        </figure>
      </Container>
    </section>
  );
}
