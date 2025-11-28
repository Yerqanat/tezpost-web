import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnerRequirements() {
  const t = useTranslations("partner");

  const premisesRequirements = [
    t("requirements.premises.list.0"),
    t("requirements.premises.list.1"),
    t("requirements.premises.list.2"),
    t("requirements.premises.list.3"),
    t("requirements.premises.list.4"),
  ];

  const partnerRequirements = [
    t("requirements.partner.list.0"),
    t("requirements.partner.list.1"),
    t("requirements.partner.list.2"),
    t("requirements.partner.list.3"),
  ];

  return (
    <section
      id="requirements"
      className="py-20 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("requirements.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("requirements.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Premises Requirements */}
          <div className="bg-background p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">
              {t("requirements.premises.title")}
            </h3>
            <ul className="space-y-4">
              {premisesRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Requirements */}
          <div className="bg-background p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6">
              {t("requirements.partner.title")}
            </h3>
            <ul className="space-y-4">
              {partnerRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
