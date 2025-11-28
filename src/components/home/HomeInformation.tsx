import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Store,
  MessageCircleQuestionMark,
  CircleDollarSign,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeInformation() {
  const t = useTranslations("home");

  const infoItems = [
    {
      icon: Store,
      title: t("info.rules.title"),
      description: t("info.rules.desc"),
      href: "#",
    },
    {
      icon: MessageCircleQuestionMark,
      title: t("info.faq.title"),
      description: t("info.faq.desc"),
      href: "#",
    },
    {
      icon: CircleDollarSign,
      title: t("info.account.title"),
      description: t("info.account.desc"),
      href: "#",
    },
    {
      icon: Package,
      title: t("info.order.title"),
      description: t("info.order.desc"),
      href: "#",
    },
    {
      icon: Package,
      title: t("info.return.title"),
      description: t("info.return.desc"),
      href: "#",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("info.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("info.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800 group-hover:border-primary/50">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight pt-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
