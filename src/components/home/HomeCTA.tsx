import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeCTA() {
  const t = useTranslations("home");

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 h-14"
          asChild
        >
          <Link href="/tariffs">
            {t("cta.button")} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
