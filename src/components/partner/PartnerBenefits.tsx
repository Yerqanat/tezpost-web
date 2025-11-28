import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { TrendingUp, Users, Map, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnerBenefits() {
  const t = useTranslations("partner");

  const benefits = [
    {
      icon: TrendingUp,
      title: t("benefits.income.title"),
      description: t("benefits.income.desc"),
    },
    {
      icon: Users,
      title: t("benefits.customers.title"),
      description: t("benefits.customers.desc"),
    },
    {
      icon: Map,
      title: t("benefits.territory.title"),
      description: t("benefits.territory.desc"),
    },
    {
      icon: BarChart3,
      title: t("benefits.growth.title"),
      description: t("benefits.growth.desc"),
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("benefits.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
