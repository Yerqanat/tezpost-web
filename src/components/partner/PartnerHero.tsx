import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PartnerHero() {
  const t = useTranslations("partner");

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/50 -z-10" />

      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}
        />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg h-12 px-8" asChild>
            <Link href="#partner-form">
              {t("hero.apply")} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg h-12 px-8"
            asChild
          >
            <Link href="#requirements">{t("hero.requirements")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
