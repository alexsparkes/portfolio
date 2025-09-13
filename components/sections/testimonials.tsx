import { FC } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Alex delivered beyond expectations—clean code, clear communication, on time.",
    name: "Jane Doe",
    role: "Product Manager, Example Co",
  },
  {
    quote: "Strong full‑stack skills and great UX instinct. Would hire again.",
    name: "John Smith",
    role: "CTO, Startup Inc",
  },
];

export const Testimonials: FC = () => {
  return (
    <section id="testimonials">
      <div className="mx-auto lg:w-2/3 w-full py-10 px-5">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-card rounded-lg p-5 border border-border"
            >
              <blockquote className="lexend text-base leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 lexend text-sm text-foreground/80">
                <strong className="font-semibold">{t.name}</strong>
                {t.role ? ` — ${t.role}` : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
