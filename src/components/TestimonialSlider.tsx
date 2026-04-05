"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    location: "Groton, CT",
    text: "Northeast Paving did an outstanding job on our driveway. The crew was professional, efficient, and the finished product looks amazing. Highly recommend them to anyone in the area.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "Waterford, CT",
    text: "We've used Northeast Paving for our commercial parking lot twice now. They always deliver on time and on budget. The quality of their work is second to none.",
    rating: 5,
  },
  {
    name: "James L.",
    location: "New London, CT",
    text: "From the initial estimate to the final cleanup, the entire process was smooth and professional. Our new driveway has completely transformed the look of our property.",
    rating: 5,
  },
  {
    name: "Linda M.",
    location: "Mystic, CT",
    text: "Great experience from start to finish. They were upfront about costs, showed up when they said they would, and the sealcoating looks fantastic. Will definitely use them again.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center px-8"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-orange text-orange"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl leading-relaxed text-gray-warm italic mb-6">
            &ldquo;{testimonial.text}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div>
            <p className="font-heading font-bold text-charcoal uppercase tracking-wide">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-warm">{testimonial.location}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-light transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-charcoal" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-light transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-charcoal" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-orange" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
