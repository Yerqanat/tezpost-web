import TariffCard from "@/src/components/tariffs/TariffCard";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

export default function Tariffs() {
  const t = useTranslations("header"); // Using header translations for now

  const tariffs = [
    {
      type: "land",
      origin: "China",
      destination: "Almaty",
      price: "$3.8",
      unit: "kg",
      deliveryTime: "10-15 days",
      features: [
        "Land Delivery",
        "Free repackaging",
        "Real-time tracking",
        "Warehouse storage (7 days free)",
        "No insurance included",
      ],
    },
    {
      type: "air",
      origin: "China",
      destination: "Almaty",
      price: "$9.0",
      unit: "kg",
      deliveryTime: "5-10 days",
      features: [
        "Air Delivery",
        "Free repackaging",
        "Real-time tracking",
        "Warehouse storage (7 days free)",
        "No insurance included",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("tariffs")}</h1>
        <p className="text-muted-foreground">
          Transparent pricing with no hidden fees. Choose the route that suits you best.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Tabs defaultValue="land" className="w-full max-w-md flex flex-col items-center">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="land">Land Delivery</TabsTrigger>
            <TabsTrigger value="air">Air Delivery</TabsTrigger>
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
