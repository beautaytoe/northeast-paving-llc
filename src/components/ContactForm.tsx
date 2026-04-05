"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  variant?: "contact" | "estimate";
}

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to form handler (e.g., Formspree, Netlify Forms, or API route)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          {variant === "estimate"
            ? "We've received your estimate request. A member of our team will contact you within 1 business day."
            : "We've received your message. We'll get back to you as soon as possible."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors"
            placeholder="(860) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors"
          placeholder="john@example.com"
        />
      </div>

      {variant === "estimate" && (
        <>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-charcoal mb-1.5">
              Project Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors"
              placeholder="123 Main Street, Groton, CT"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-1.5">
              Service Needed *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors bg-white"
            >
              <option value="">Select a service...</option>
              <option value="asphalt-paving">Asphalt Paving</option>
              <option value="sealcoating-repair">Sealcoating & Repair</option>
              <option value="grading-excavation">Grading & Excavation</option>
              <option value="material-delivery">Material Delivery</option>
              <option value="gravel-stone">Gravel & Stone Installation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-charcoal mb-1.5">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors bg-white"
            >
              <option value="">Select type...</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="municipal">Municipal</option>
            </select>
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1.5">
          {variant === "estimate" ? "Project Details" : "Message"} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue focus:border-blue outline-none transition-colors resize-y"
          placeholder={
            variant === "estimate"
              ? "Tell us about your project — approximate size, current condition, timeline, etc."
              : "How can we help you?"
          }
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-blue hover:bg-blue-dark text-white font-bold px-8 py-4 rounded-md transition-colors text-lg uppercase tracking-wide"
      >
        {variant === "estimate" ? "Request Free Estimate" : "Send Message"}
      </button>
    </form>
  );
}
