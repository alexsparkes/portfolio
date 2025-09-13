import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const Contact: FC = () => {
  const email = "hello@alexspark.es"; // update if needed
  const subject = encodeURIComponent("Project inquiry from portfolio");
  const body = encodeURIComponent(
    "Hi Alex,\n\nI'd like to discuss a project.\n\nBudget & timeline (if known):\nScope/goal:\nLinks/screenshots:\n\nThanks!"
  );

  return (
    <section id="contact">
      <div className="mx-auto lg:w-2/3 w-full py-10 px-5">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Contact
        </h1>
        <p className="lexend text-foreground/90 max-w-2xl">
          Interested in working together? Reach out and let&apos;s discuss your
          project.
        </p>
        <div className="flex gap-3 mt-5">
          <Button asChild size="lg" className="lexend gap-2">
            <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
              <Mail className="w-4 h-4" /> Email me
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="lexend">
            <a href="/Alex_Sparkes_CV.pdf" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
