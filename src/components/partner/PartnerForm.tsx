import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useTranslations } from "next-intl";

export default function PartnerForm() {
  const t = useTranslations("partner");

  return (
    <section id="partner-form" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-background border rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{t("form.title")}</h2>
            <p className="text-muted-foreground">{t("form.subtitle")}</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t("form.name")}</Label>
              <Input id="name" placeholder={t("form.name")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("form.phone")}</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">{t("form.city")}</Label>
              <Input id="city" placeholder={t("form.city")} />
            </div>

            <Button type="submit" className="w-full text-lg h-12">
              {t("form.submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
