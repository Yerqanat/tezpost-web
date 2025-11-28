import { ShieldCheck, Clock, MapPin, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeFeatures() {
  const t = useTranslations("home");

  const features = [
    {
      icon: Clock,
      title: t("features.fast.title"),
      description: t("features.fast.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("features.secure.title"),
      description: t("features.secure.desc"),
    },
    {
      icon: MapPin,
      title: t("features.tracking.title"),
      description: t("features.tracking.desc"),
    },
    {
      icon: Wallet,
      title: t("features.prices.title"),
      description: t("features.prices.desc"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
