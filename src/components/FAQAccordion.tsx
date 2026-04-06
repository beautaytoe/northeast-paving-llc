import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex w-full items-center justify-between py-5 text-left gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="font-heading text-lg font-semibold text-charcoal uppercase tracking-wide">
              {item.question}
            </span>
            <ChevronDown className="w-5 h-5 text-blue shrink-0 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-gray-warm leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
