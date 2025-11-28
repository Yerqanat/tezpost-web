import { Card, CardContent } from "@/src/components/ui/card";
import { Package, Scale, Users, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeStats() {
  const t = useTranslations("home");

  const stats = [
    {
      icon: Package,
      value: "30,000+",
      label: t("stats.shipments"),
    },
    {
      icon: Scale,
      value: "1,000+ kg",
      label: t("stats.weight"),
    },
    {
      icon: Users,
      value: "5,000+",
      label: t("stats.clients"),
    },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-sm bg-background/60 backdrop-blur"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
