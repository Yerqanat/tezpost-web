import { ClipboardCheck, GraduationCap, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnerSteps() {
  const t = useTranslations("partner");

  const steps = [
    {
      icon: ClipboardCheck,
      title: t("steps.step1.title"),
      description: t("steps.step1.desc"),
    },
    {
      icon: GraduationCap,
      title: t("steps.step2.title"),
      description: t("steps.step2.desc"),
    },
    {
      icon: Rocket,
      title: t("steps.step3.title"),
      description: t("steps.step3.desc"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("steps.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("steps.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-background border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center mb-6 z-10">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
