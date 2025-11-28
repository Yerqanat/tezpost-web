import { UserPlus, ShoppingCart, Warehouse, PackageCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeProcess() {
  const t = useTranslations("home");

  const steps = [
    {
      icon: UserPlus,
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
    },
    {
      icon: ShoppingCart,
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
    },
    {
      icon: Warehouse,
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
    },
    {
      icon: PackageCheck,
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg relative">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-slate-800 rounded-full border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
