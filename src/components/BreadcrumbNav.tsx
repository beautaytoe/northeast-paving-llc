import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://northeastpavingllc.com${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="bg-gray-light py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-warm">
          {items.map((item, i) => (
            <span key={i}>
              {i > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-blue transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
