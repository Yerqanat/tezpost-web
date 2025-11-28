import TariffCard from "@/src/components/tariffs/TariffCard";
import { useTranslations } from "next-intl";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";

export default function Tariffs() {
  const t = useTranslations("tariffs");

  const tariffs = [
    {
      type: "land" as const,
      origin: t("origin"),
      destination: t("destination"),
      price: "$3.8",
      unit: "kg",
      deliveryTime: "10-15",
      features: [
        t("features.repackaging"),
        t("features.tracking"),
        t("features.storage"),
        t("features.insurance"),
      ],
    },
    {
      type: "air" as const,
      origin: t("origin"),
      destination: t("destination"),
      price: "$9.0",
      unit: "kg",
      deliveryTime: "5-10",
      features: [
        t("features.repackaging"),
        t("features.tracking"),
        t("features.storage"),
        t("features.insurance"),
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="flex justify-center mb-8">
        <Tabs
          defaultValue="land"
          className="w-full max-w-md flex flex-col items-center"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="land">{t("land")}</TabsTrigger>
            <TabsTrigger value="air">{t("air")}</TabsTrigger>
          </TabsList>

          <TabsContent value="land" className="mt-8 w-full flex justify-center">
            {tariffs
              .filter((t) => t.type === "land")
              .map((tariff, index) => (
                <TariffCard key={index} {...tariff} />
              ))}
          </TabsContent>

          <TabsContent value="air" className="mt-8 w-full flex justify-center">
            {tariffs
              .filter((t) => t.type === "air")
              .map((tariff, index) => (
                <TariffCard key={index} {...tariff} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
